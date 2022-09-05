import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
}
)

export class AuthGuard implements CanActivate
{
    constructor(private router : Router,private jwthelper : JwtHelperService)
    {
        
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
     {
        const token = localStorage.getItem("jwt");
        if (token && !this.jwthelper.isTokenExpired(token)){
            return true;
        }
        this.router.navigate(['authentication/login']);
        return false;
    }

  
}