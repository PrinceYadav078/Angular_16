import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Observables';

  data: any[] = [];

  //1.CREATE AN OBSERVABLE

  //OBSERVABLE
  myobservable = new Observable((observer) => {
    // observer.next([1,2,3,4,5]);

    //STREAMING THE DATA
    // observer.next(1)
    // observer.next(2)
    // observer.next(3)
    // observer.next(4)
    // observer.next(5)

    //STREAMING THE DATA
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);

    // setTimeout(()=>{observer.error(new Error('Something Went Wrong please try again later!'))},4000)

    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);

    setTimeout(() => {
      observer.complete();
    }, 6000);
  });

  //   getAsyncData(){
  //     // OBSERVER
  //     //next, error, complete
  //     this.myobservable.subscribe((val:any)=>{
  //       this.data.push(val);
  //     },
  //       (err)=>{alert(err.message)},
  //       ()=>{alert('All the data is streamed')}
  //     )
  //   }

  getAsyncData() {
    // OBSERVER
    //next, error, complete
    
    //NEW WAY TO WRITE CALLBACK METHODS
    this.myobservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err) {
        alert('All the data is streamed');
      },
      complete() {
        alert('All the data is streamed');
      },
    });
  }
}
