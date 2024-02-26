import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  searchtext:string='';
  onChange(event:any){
    this.searchtext=event.target.value
    console.log(this.searchtext)
  }
}
