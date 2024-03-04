import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Model/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

course;

router:Router=inject(Router)

ngOnInit(){
  this.course= history.state
  console.log(this.course)
}

}
