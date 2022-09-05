import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, VirtualTimeScheduler } from "rxjs";
import { environment } from "src/environments/environment";
import { IUserCredentials } from "../models/userCredentials";

@Injectable({
    providedIn:"root"
})

export class AuthenticationService {
    baseApiUrl:string = environment.baseApiUrl;
    constructor(private http: HttpClient) {

    }

    login(userCredentials : IUserCredentials) : Observable<IUserCredentials>
    {
      return this.http.post<IUserCredentials>(this.baseApiUrl+'/api/authentication/login',userCredentials);
    }
}