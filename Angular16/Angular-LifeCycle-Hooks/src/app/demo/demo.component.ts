import { AfterContentInit, ContentChild, ElementRef, SimpleChange, ViewChild } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, AfterContentInit {
  title:string='demo component'

  @Input()
  message:string;

  constructor(){
    console.log("Demo Component constructor is called")
    // console.log(this.title)
    // console.log(this.message)
  }

  @ContentChild('para') paraEl:ElementRef
  @ViewChild('temp') tempPara:ElementRef

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChange Hook Called")
    // console.log(this.message)
    // console.log(changes)
  }
  ngOnInit(){
    console.log("ngOnInit Hook Called")
  }

  ngDoCheck(){
    console.log("ngDoCheck hook is called")
    console.log("in ngDoCheck ",this.paraEl)
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit hook is called")
    console.log("in ngAfterContentInit",this.paraEl.nativeElement)
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked hook is called")
    console.log("in ngAfterContentChecked",this.paraEl.nativeElement)
    console.log("in ngAfterContentChecked",this.tempPara)
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit hook is called")
    console.log("in ngAfterViewInit",this.tempPara)
  }
}
