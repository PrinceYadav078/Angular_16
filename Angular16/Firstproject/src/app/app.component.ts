import { Component, Input, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prince Yadav';

  searchText:string='';

  setSearchText(val:string){
    console.log(val)
    this.searchText=val
  }

 @ViewChild(ProductComponent)  productComponent:ProductComponent
}
