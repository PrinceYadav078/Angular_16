import { SimpleChange } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {
  title:string='demo component'
  @Input()
  message:string;

  constructor(){
    console.log("Demo Component constructor is called")
    console.log(this.title)
    console.log(this.message)
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChange Hook Called")
    console.log(this.message)
    console.log(changes)
  }
}
