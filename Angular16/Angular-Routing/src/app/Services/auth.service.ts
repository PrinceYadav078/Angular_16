import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged:boolean=false;

  userService:UserService= inject(UserService);

  login(username:string, password:string){
    let user=this.userService.users.find((u)=>{
      return u.username === username && u.password === password
    })
    if(user){
      this.isLogged=true;
    }
  }

  logout(){
    this.isLogged=false;
  }
}
