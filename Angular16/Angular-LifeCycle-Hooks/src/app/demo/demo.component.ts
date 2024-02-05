import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title:string='demo component'
  @Input()
  message:string="Prince"

  constructor(){
    console.log("Demo Component constructor is called")
    console.log(this.title)
    console.log(this.message)
  }
}
