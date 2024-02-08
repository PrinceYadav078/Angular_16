import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector:'[setBackground]'
})
export class SetBackground{
    // private element:ElementRef

    constructor(private element:ElementRef){
    //    this.element=element;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor= '#36454F';
        this.element.nativeElement.style.color= 'white';
    }
}