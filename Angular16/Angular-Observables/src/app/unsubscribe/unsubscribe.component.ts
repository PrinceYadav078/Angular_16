import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {

  data1:number[]=[];
  data2:number[]=[];
  data3:number[]=[];

  counter= interval(2000);

  subscriber1;
  subscriber2;
  subscriber3;

  onSubscribe1(){
    this.subscriber1=this.counter.subscribe((val)=>{
      this.data1.push(val)
    })
  }
  onSubscribe2(){
    this.subscriber2=this.counter.subscribe((val)=>{
      this.data2.push(val)
    })
  }
  onSubscribe3(){
    this.subscriber3=this.counter.subscribe((val)=>{
      this.data3.push(val)
    })
  }
  
  onUnSubsribe1(){
    this.subscriber1.unsubscribe()
  }
  onUnSubsribe2(){
    this.subscriber2.unsubscribe()
  }
  onUnSubsribe3(){
    this.subscriber3.unsubscribe()
  }
}
