import { Component, Input, ViewChild } from '@angular/core';
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

  @Input()
  isOpen:boolean=true;

  @ViewChild('prodDetailCard') prodCard:any
  
  closeProductDetailCard(){
    this.isOpen=!this.isOpen;
    console.log(this.isOpen)
  
  }
}
