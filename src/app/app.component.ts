import { Component, OnInit } from '@angular/core';
import { OnlineAssistantService } from './services/onlineAssistant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  public message : string;
  public messageList : string[] = []
  /**
   *
   */
  constructor(private assistant : OnlineAssistantService ) {
    
  }
  async ngOnInit(): Promise<void> 
  {
    await this.assistant.startconnection();
    this.assistant.receiveMessageHandler();
   /*  this.assistant.send(); */
  }
  title = 'BookingTablesFront';

  isUserAuthenticated() : boolean
  {
    const token  = localStorage.getItem('jwt');
    if (token){
      return true;
    }
    return false;
  }

  logout()
  {
    localStorage.removeItem('jwt');
  }
  
  async sendMessage()
  {
    await this.assistant.send(this.message);
    this.messageList.push(this.message);
  }
}
