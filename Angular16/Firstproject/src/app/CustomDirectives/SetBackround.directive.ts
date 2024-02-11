import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";


@Directive({
    selector:'[setBackground]'
})
export class SetBackground{
    // private element:ElementRef
    // private renderer:Renderer2

    // @Input('setBackground') backcolor:string='#36454F'
    // @Input() textcolor:string='white'

    @Input('setBackground') changeBackandText ={backcolor:'#36454F', textcolor:'white'}

    constructor(private element:ElementRef, private renderer:Renderer2){
    //    this.element=element;
            // this.renderer=renderer
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor= '#36454F';
        // this.element.nativeElement.style.color= 'white';


        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeBackandText.backcolor)
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeBackandText.textcolor)
        // this.renderer.setAttribute(this.element.nativeElement,'title','this is gbc element')
    }
}