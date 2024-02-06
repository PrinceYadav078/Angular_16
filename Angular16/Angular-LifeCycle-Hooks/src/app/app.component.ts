import { Component, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log("AppComponent constructor is called")
  }
  inputVal:string ='';
  onBtnClick(inputEl:HTMLInputElement){
    this.inputVal=inputEl.value
  }

  
  @ViewChild(DemoComponent) demoComp:DemoComponent;

  ngAfterViewInit(){
    console.log("parent component ngAfterViewInit hook is called")
   
  }
  
}
