import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'  // THIS LINE MEANS THAT THIS SERVICES PROVIDED IN ROOT (APP.MODULE.TS) SO NOW NO NEED TO PROVIDE EXPLICITLY THIS SERVICE IN ROOT APP.MODULE.TS FILE PROVIDER ARRAY 
})
export class LoggerService {

  logMessage(name:string, status:string){
    console.log(`a new user ${name} with status ${status} is added to user list.`)
  }
}
