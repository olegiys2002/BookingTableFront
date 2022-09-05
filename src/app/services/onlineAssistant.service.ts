import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr"
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"
})

export class OnlineAssistantService
{
    private hubConnection:signalR.HubConnection;
    public baseUrl = environment.baseApiUrl;

    constructor(private httpClient : HttpClient) 
    {
        
    }

    public startconnection = async () => 
    {
        this.hubConnection = new signalR.HubConnectionBuilder().withUrl(this.baseUrl+'/assistant',{
            skipNegotiation:true,
            transport:signalR.HttpTransportType.WebSockets
        }).build();
        await this.hubConnection.start().then(()=>console.log("connection started"));
    
    }

    public receiveMessageHandler()
    {
        this.hubConnection.on("Receive Message", (message)=>{
            console.log(message);
        });
    }


    public async send(message : string)
    {
        if (this.hubConnection !== null)
        {
            await this.hubConnection.invoke("SendMessage",message);
        }
    }
}

