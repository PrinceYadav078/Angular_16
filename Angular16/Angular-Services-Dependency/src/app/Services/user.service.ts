import { User } from "../Model/user";

export class UserService {

  users:User[]=[
    new User('Prince Yadav','Male','Monthly','Active'),
    new User('Rashmika Mandhana','Female','Quaterly','InActive')
    
  ];

  getAllUser(){
    return this.users;
  }

  createUser(name:string, gender:string, subtype:string, status:string){
    this.users.push(new User(name,gender,subtype,status));
  }
  

}
