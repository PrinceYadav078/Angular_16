import { Component, Input, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prince Yadav';

  searchText: string = '';

  setSearchText(val: string) {
    console.log(val);
    this.searchText = val;
  }

  @ViewChild(ProductComponent) productComponent: ProductComponent;

  isOpen: boolean;
  // ngOnChange() {
  //   this.isOpen = this.productComponent.isOpen;
  //   console.log('in ngDoCheck', this.productComponent.isOpen);
  // }

}
