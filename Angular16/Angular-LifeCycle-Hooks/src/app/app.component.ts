import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log("AppComponent constructor is called")
  }
  inputVal:string[]=['hello Prince','Hi There'];
  onBtnClick(inputEl:HTMLInputElement){
    this.inputVal.push(inputEl.value)
  }
}
