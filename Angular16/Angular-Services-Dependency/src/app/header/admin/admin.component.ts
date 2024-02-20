import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
 
})
export class AdminComponent {

  constructor(private userService: UserService){

  }
  
  name:string='';
  gender:string='Male';
  subtype:string='Yearly';
  status:string='Active';

  createNewUser(){
    this.userService.createUser(this.name,this.gender,this.subtype,this.status)
    console.log(this.userService.getAllUser())
  }
}
