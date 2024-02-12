import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @Input('appStyle') set display(value:object){
    let styleEntries= Object.entries(value);
    for(let item of styleEntries){
      let[cssStyle, value]=item;
      this.renderer.setStyle(this.element.nativeElement, cssStyle, value)
    }
  }

}
