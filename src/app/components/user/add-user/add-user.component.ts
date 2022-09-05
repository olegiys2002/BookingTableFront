import { HttpHeaders } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  file:any;
  myForm : FormGroup;
  form:FormData = new FormData();
  public addUserRequest : IUser=
  {
    id:0,
    name : '',
    role:'User',
    password:'',
    email:'',
    createdAt:new Date(),
    updatedAt:new Date(),
    avatarId:0,
    avatarFormDTO:{
      image:new File([""],""),
    }
  }
 
  constructor(private userService:UserService,private router : Router,private formBuilder : FormBuilder)
  { 
    this.myForm = formBuilder.group({
      "name": new FormControl('',Validators.required),
      "role": new FormControl('User',Validators.required),
      "email":new FormControl('',Validators.email),
      "password": new FormControl('',Validators.required),
      "image":new FormControl('',Validators.required)

    })
  }

  ngOnInit(): void {
  }
 
  onSelectedFile(event: any)
  {
    this.file = event.target.files[0];
    
  }

  addUser() 
  {
    
    this.form.append('name',this.myForm.get('name')?.value);
    this.form.append('role',this.myForm.get('role')?.value);
    this.form.append('email',this.myForm.get('email')?.value);
    this.form.append('password',this.myForm.get('password')?.value);
    console.log(this.file);
    this.form.append('avatarFormDTO.image',this.file);
    this.userService.addUser(this.form).subscribe(table=>console.log(table));
  }

}
