import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @ContentChild('para') paraele:ElementRef

  @ContentChild(TestComponent) testcomp:TestComponent

  showPara(){
    console.log(this.paraele.nativeElement)
    console.log(this.testcomp.name)
  }
}
