import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  fistName:string=''
  lastName:string=''
  country:string='usa'
  message:string=''

  isSubmitted:boolean=false;
  
  onSubmit(){
    this.isSubmitted=true;
  }

  canExit(){
    console.log('canExit called');
    if((this.fistName || this.lastName || this.message) && !this.isSubmitted){
      return confirm("You have unsave Changes. Do you want to navigate away?.")
    }else{
      return true;
    }
  }

}
