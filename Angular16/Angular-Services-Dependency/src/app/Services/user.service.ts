import { Injectable } from "@angular/core";
import { User } from "../Model/user";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {

  constructor(private logger:LoggerService){}

  users:User[]=[
    new User('Prince Yadav','Male','Monthly','Active'),
    new User('Rashmika Mandhana','Female','Quaterly','InActive')
    
  ];

  getAllUser(){
    return this.users;
  }

  createUser(name:string, gender:string, subtype:string, status:string){
    this.users.push(new User(name,gender,subtype,status));
    this.logger.logMessage(name,status);
  }
  

}
