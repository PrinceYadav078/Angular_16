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

  toDestroy=false;

  onBtnClick(inputEl:HTMLInputElement){
    this.inputVal=inputEl.value
  }

  onDestroy(){
    this.toDestroy=!this.toDestroy
  }


  @ViewChild(DemoComponent) demoComp:DemoComponent;
  mssg:string;
  ngAfterViewInit(){
    console.log("parent component ngAfterViewInit hook is called")
   
  }

  ngAfterViewChecked(){
    console.log(" parent component ngAfterViewChecked hook is called")
    // console.log("in parent component ngAfterViewCheked", this.demoComp.message)
    // this.mssg=this.demoComp.message
   
  }
  
}
