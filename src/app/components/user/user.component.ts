import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$ : Observable<IUser[]>;
  constructor(private userServise : UserService) { }

  ngOnInit(): void 
  {
    this.users$ = this.userServise.getUsers();
  }

}
