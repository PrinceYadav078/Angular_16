import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Observables';

  data :any[]=[];


  //1.CREATE AN OBSERVABLE

  //OBSERVABLE
  myobservable= new Observable((observer)=>{
    // observer.next([1,2,3,4,5]);
    
    // observer.next(1)
    // observer.next(2)
    // observer.next(3)
    // observer.next(4)
    // observer.next(5)

    setTimeout(()=>{observer.next(1)},1000)
    setTimeout(()=>{observer.next(2)},2000)
    setTimeout(()=>{observer.next(3)},3000)
    setTimeout(()=>{observer.next(4)},4000)
    setTimeout(()=>{observer.next(5)},5000)
  })


  getAsyncData(){
    // OBSERVER
    //next, error, complete
    this.myobservable.subscribe((val:any)=>{
      this.data.push(val);
    })
  }
}
