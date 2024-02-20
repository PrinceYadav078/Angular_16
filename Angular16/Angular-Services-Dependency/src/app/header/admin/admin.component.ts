import { Component, Inject} from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
 
})
export class AdminComponent {

  constructor(@Inject(USER_TOKEN) private userService: UserService){

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
