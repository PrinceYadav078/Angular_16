import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Observables';

  data: any[] = [];

  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];

  @ViewChild('createbtn')
  createBtn: ElementRef;

  createBtnObs;

  //1.CREATE AN OBSERVABLE

  //OBSERVABLE
  // myobservable = new Observable((observer) => {
  //   // observer.next([1,2,3,4,5]);

  //   //STREAMING THE DATA
  //   // observer.next(1)
  //   // observer.next(2)
  //   // observer.next(3)
  //   // observer.next(4)
  //   // observer.next(5)

  //   //STREAMING THE DATA
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);

  //   // setTimeout(()=>{observer.error(new Error('Something Went Wrong please try again later!'))},4000)

  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  // myobservable=of(this.array1, this.array2, 20, 30 , 'Prince')

  mypromise = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4, 5]);
  });

  //myobservabale- 2 4 6 8 10 12
  //result- 10 20 30 40 50 60
  myobservable = from([2, 4, 6, 8, 10, 12]).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val % 4 == 0;
    })
  );

  //transformedObs 10 20 30 40 50 60
  // transformedObs = this.myobservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   })
  // );

  //filteredObs 20 40 60
  // filteredObs = this.transformedObs.pipe(
  //   filter((val) => {
  //     return val % 4 === 0;
  //   })
  // );

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

  // buttonClicked() {
  //   let count=1
  //   this.createBtnObs = fromEvent(
  //     this.createBtn.nativeElement,
  //     'click'
  //   ).subscribe((data) => {
  //     this.showItem(count++);
  //   });
  // }

  ngAfterViewInit() {
    // this.buttonClicked();
  }

  // showItem(count){
  //   let div= document.createElement('div');
  //   div.className='data-list'
  //   div.innerText='item'+count;
  //   document.getElementById('content').appendChild(div)
  // }
}
