import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent {
  user;

  ngOnInit() {
    // let obs= new Observable((observer)=>{observer.next(Math.random())})
    // const sub = new Subject();
    // const Behv_subject = new BehaviorSubject<number>(100);
    // const replay_subject= new ReplaySubject();

    // replay_subject.next(100);
    // replay_subject.next(200);
    // replay_subject.next(300);

    // //Subscriber 1
    // // obs.subscribe((val)=>{console.log(val)})
    // // sub.subscribe((val) => console.log(val));
    // // Behv_subject.subscribe((val)=>{console.log("Subcribr1=> ",val)});
    // replay_subject.subscribe((val)=>{console.log("Subcribr1=> ", val)})

    // //Subscriber 2
    // // obs.subscribe((val)=>{console.log(val)})
    // // sub.subscribe((val) => console.log(val));
    // // Behv_subject.subscribe((val)=>{console.log("Subcribr2=> ",val)});
    // replay_subject.subscribe((val)=>{console.log("Subcribr2=> ", val)})

    // // Behv_subject.next(2018);
    // replay_subject.next(2018)

    // //Subscriber 3
    // // Behv_subject.subscribe((val)=>{console.log("Subcribr3=> ",val)});
    // replay_subject.subscribe((val)=>{console.log("Subcribr3=> ", val)})

    // // Behv_subject.next(2023)
    // replay_subject.next(2023)

    // // sub.next(Math.random());

    // const data = ajax('https://randomuser.me/api/');
    // const subject= new Subject();
    // subject.subscribe((res:any) => {
    //   console.log(res);
    // });

    // subject.subscribe((res) => {
    //   console.log(res);
    // });

    // subject.subscribe((res) => {
    //   console.log(res);
    // });

    // data.subscribe(subject);

    //Async Subjet
    const async_subject= new AsyncSubject();
    async_subject.next(100);
    async_subject.next(200);
    async_subject.next(300);
    
    //Subscriber1
    async_subject.subscribe((val)=>{console.log(`Subscriber1=> ${val}`)})
    
    async_subject.complete();
    async_subject.next(400);
    //Subscriber2
    async_subject.subscribe((val)=>{console.log(`Subscriber2=> ${val}`)})
  }
}
//Subjects are multicasted 
//Observavble are unicasted
