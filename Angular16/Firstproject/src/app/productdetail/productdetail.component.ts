import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {

  product:Product

  @Input()
  productComp:ProductComponent=undefined

  ngOnInit(){
   this.product =this.productComp.selectedProduct;
  }

    
}
