import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableproductDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @Input() set disableProduct(disable:Boolean){
    if(disable){
      this.renderer.addClass(this.element.nativeElement,'disable-out-of-stock-product')
      console.log("in disableproduct property method ",disable)
    }
  }

}
