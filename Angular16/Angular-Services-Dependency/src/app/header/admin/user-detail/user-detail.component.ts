import { Component, inject } from '@angular/core';
import { User } from 'src/app/Model/user';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
 
})
export class UserDetailComponent {

  userService = inject(USER_TOKEN);

  selectedUser:User;

  ngOnInit(){
    this.userService.onUserDetailClicked.subscribe((user)=>{
      this.selectedUser=user;
    })
  }
  
}
