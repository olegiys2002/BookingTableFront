import { HttpClient, HttpHeaders, HttpStatusCode } from "@angular/common/http";
import { EnvironmentInjector, Injectable } from "@angular/core";
import { Form } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IOrder } from "../models/order";
import { IUser } from "../models/user";

@Injectable({
  providedIn:'root'
})

export class UserService{

  apiHost : string = environment.baseApiUrl;

   constructor(private http:HttpClient)
   {

   }

   public getUsers() : Observable<IUser[]> 
   {
     return this.http.get<IUser[]>(this.apiHost+'/api/users');
   }

   public addUser(userForm:FormData) : Observable<IUser>
   {
    return this.http.post<IUser>(this.apiHost+'/api/users',userForm);
   }

   public getUser(id:string) : Observable<IUser>
   {
    return this.http.get<IUser>(this.apiHost+'/api/users/'+ id);
   }

   public deleteUser(id:string) :Observable<HttpStatusCode>
   {
    return this.http.delete<HttpStatusCode>(this.apiHost+'/api/users/'+id)
   }

   public editUser(id:string,userForm : FormData) : Observable<HttpStatusCode>
   {
      return this.http.put<HttpStatusCode>(this.apiHost+'/api/users/'+id,userForm);
   }

}