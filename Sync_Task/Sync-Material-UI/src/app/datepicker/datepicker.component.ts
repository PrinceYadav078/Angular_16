import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements  DoCheck {
  date: Date;


  ngDoCheck(): void {
    console.log("date=> ", this.date)
    
   
  }
}
