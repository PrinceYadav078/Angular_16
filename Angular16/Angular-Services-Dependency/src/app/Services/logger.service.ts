import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

  logMessage(name:string, status:string){
    console.log(`a new user ${name} with status ${status} is added to user list.`)
  }
}
