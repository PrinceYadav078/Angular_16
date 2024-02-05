import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @ContentChild('para') paraele:ElementRef

  @ContentChildren('para') paraelems:QueryList<ElementRef>

  @ContentChild(TestComponent) testcomp:TestComponent

  @ContentChildren(TestComponent) testcomponents:QueryList<TestComponent>

  showPara(){
    // console.log(this.paraele.nativeElement)
    // console.log(this.testcomp.name)
    this.paraelems.forEach((el)=>{
      console.log(el.nativeElement)
    })

    this.testcomponents.map((el)=>{
      console.log(el.name)
    })

  
  }
}
