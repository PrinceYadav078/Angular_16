import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-vsobservable',
  templateUrl: './promise-vsobservable.component.html',
  styleUrls: ['./promise-vsobservable.component.css']
})
export class PromiseVSObservableComponent implements OnInit{

  ngOnInit(){
    const promise= new Promise((resolve,reject)=>{
      console.log("Promise is called");
      resolve(100)
      resolve(200)
      resolve(300)
    })

    promise.then((val)=>{console.log("promise data ",val)})

    const obs= new Observable((observer)=>{
      console.log("Observer is called");
      observer.next(100)
      observer.next(200)
      observer.next(300)
      
    })

    obs.subscribe((val)=>{console.log("observable data ",val)})
  }


}
