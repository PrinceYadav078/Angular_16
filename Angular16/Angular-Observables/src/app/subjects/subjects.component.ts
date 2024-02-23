import { Component } from '@angular/core';
import { Subject } from 'rxjs';
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
    const sub = new Subject();
    //Subscriber 1
    // obs.subscribe((val)=>{console.log(val)})
    sub.subscribe((val) => console.log(val));

    //Subscriber 2
    // obs.subscribe((val)=>{console.log(val)})
    sub.subscribe((val) => console.log(val));

    sub.next(Math.random());

    const data = ajax('https://randomuser.me/api/');
    const subject= new Subject();
    subject.subscribe((res:any) => {
      console.log(res);
    });

    subject.subscribe((res) => {
      console.log(res);
    });

    subject.subscribe((res) => {
      console.log(res);
    });

    data.subscribe(subject);
  }
}
//Subjects are multicasted 
//Observavble are unicasted
