import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserCredentials } from 'src/app/models/userCredentials';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  userCredentials : IUserCredentials = 
  {
    password : '',
    email : ''
  }

  constructor(private authenticationManager:AuthenticationService,private router:Router) 
  { 

  }

  ngOnInit(): void {

  }

  login()
  {
    this.authenticationManager.login(this.userCredentials).subscribe(response=>{
    const token = (<any>response).token;
    localStorage.setItem('jwt',token);
    this.router.navigate(['/']);
      
    
    });
  }


}
