import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, VirtualTimeScheduler } from "rxjs";
import { environment } from "src/environments/environment";
import { IOrder } from "../models/order";
import { IOrderFormDTO } from "../models/orderFormDTO";
import { ITable } from "../models/table";

@Injectable({
    providedIn:"root"
})

export class OrderService {
    baseApiUrl:string = environment.baseApiUrl;
    public tablesToAdd:number[] = [];
    constructor(private http: HttpClient) {

    }

    setTables(tables : number[])
    {
        this.tablesToAdd = tables;
    }

    getTables()
    {
        return this.tablesToAdd;
    }   

    getAllOrders() : Observable<IOrder[]>
    {
        return this.http.get<IOrder[]>(this.baseApiUrl+'/api/orders')
    }

    createOrder(order:IOrderFormDTO) : Observable<IOrder>
    {
        return this.http.post<IOrder>(this.baseApiUrl+'/api/orders',order);
    }

    getOrder(id:string) : Observable<IOrder>
    {
        return this.http.get<IOrder>(this.baseApiUrl+'/api/orders/'+id);
    }

    deleteOrder(id:string) : Observable<HttpStatusCode>
    {
        return this.http.delete<HttpStatusCode>(this.baseApiUrl+'/api/orders/'+id);
    }
}