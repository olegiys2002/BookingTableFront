import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { JsonPipe } from "@angular/common";

@Injectable({
    providedIn:'root'
}
)

export class RoleGuard implements CanActivate
{
    constructor(private router : Router,private jwthelper : JwtHelperService)
    {
        
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
     {
        const admintype = route.data.admintype;
        var token = <string> localStorage.getItem("jwt");
        const decodedToken = this.jwthelper.decodeToken(token);
        console.log(decodedToken);
        return true;
        /* let jwtData = token.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)

        let isAdmin = decodedJwtData.role;
        console.log(decodedJwtData);
        console.log(isAdmin);
        return isAdmin; */
    }

  
}