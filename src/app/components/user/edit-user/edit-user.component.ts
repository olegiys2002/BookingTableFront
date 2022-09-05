import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  file:File;
  myForm : FormGroup;
  form: FormData =  new FormData();
  constructor(private activeRoute : ActivatedRoute, private userService:UserService,private router : Router,formBuilder : FormBuilder) 
  {
    this.myForm = formBuilder.group({
      "id": new FormControl('',Validators.required),
      "name": new FormControl('',Validators.minLength(3)),
      "role": new FormControl('',Validators.required),
      "email":new FormControl('',Validators.required),
      "password": new FormControl('',Validators.required),
      "image":new FormControl('',Validators.required)
    })
  
  }


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe({ 
      next:(params) =>{
        const id = params.get('id');
        if (id)
        {
          this.userService.getUser(id).subscribe(user=>this.myForm.patchValue(user));
        }
      }
    })
  }

  onSelectedFile(event : any)
  {
    this.file = event.target.files[0];
  }

  public editUser()
  {
    console.log(this.myForm.get('name')?.value);
    this.form.append('name',this.myForm.get('name')?.value);
    this.form.append('role',this.myForm.get('role')?.value);
    this.form.append('email',this.myForm.get('email')?.value);
    this.form.append('password',this.myForm.get('password')?.value);
    this.form.append('avatarFormDTO.image',this.file);
    let id = this.myForm.get('id')?.value;
    this.userService.editUser(id,this.form).subscribe({
      next: (response) => {  this.router.navigate(['users'])}
    });
  } 

  public deleteUser()
  {
    let id = this.myForm.get('id')?.value;
    this.userService.deleteUser(id).subscribe({
      next: (response) =>{ this.router.navigate(['users']);}
    });
  }

}
