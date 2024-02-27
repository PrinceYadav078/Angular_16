import { Component, OnInit, inject } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  constructor(private userService:UserService){}

  
  users:User[]=[]
  userToDelete:User;

  showConfirmDeleteComponent:boolean=false;

  ngOnInit(){
    this.users=this.userService.users
  }

  onDeleteClicked(user:User){
    this.showConfirmDeleteComponent=true;
    this.userToDelete=user;
  }

  onUserDeletionConfirmed(value:boolean){
    this.showConfirmDeleteComponent=false;
    if(value){
      //Delete the user
      let idx=this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(idx,1);
      console.log("User Deleted")

    }else{
      console.log("You click on cancel button so user is not deleted")
    }
  }
}
