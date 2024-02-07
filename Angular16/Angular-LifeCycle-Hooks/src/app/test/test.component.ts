import { Component, Input } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input() msg:string;


 
}
