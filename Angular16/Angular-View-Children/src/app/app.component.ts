
import { Component, ElementRef, ViewChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-View-Children';

  fullName:string='';

  @ViewChildren('inputEl') inputElem: QueryList<ElementRef>

  showInput(){
    this.inputElem.map((el)=>{
      // console.log(el.nativeElement.value)
      this.fullName+=el.nativeElement.value+' '
    })
    this.fullName.trim();
  }
}
