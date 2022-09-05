import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ITable } from "../models/table";

@Injectable({
    providedIn:"root"
})

export class TableService
{
  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient)
  {

  }
  public getTables() : Observable<ITable[]>
  {
    return this.http.get<ITable[]>(this.baseApiUrl+'/api/tables');
  }
  public addTable(addTableRequest : ITable) : Observable<ITable>
  {
    return this.http.post<ITable>(this.baseApiUrl+'/api/tables',addTableRequest);
  }
  public getTable(id:string) : Observable<ITable>
  {
    return this.http.get<ITable>(this.baseApiUrl+'/api/tables/'+id);
  }
  public updateTable(table: ITable) : Observable<HttpStatusCode>
  {
    return this.http.put<HttpStatusCode>(this.baseApiUrl+'/api/tables/'+table.id,table);
  }
  public deleteTable(id:string) : Observable<HttpStatusCode>
  {
    return this.http.delete<HttpStatusCode>(this.baseApiUrl+'/api/tables/'+id);
  }
}