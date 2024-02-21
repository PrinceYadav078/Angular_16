import { Component, Inject } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent {

  constructor(@Inject(USER_TOKEN) private userService : UserService){

  }
  
  userList= this.userService.getAllUser();
  

  onUserDetail(user:User){
    this.userService.onShowUserDetail(user);
  }
}
