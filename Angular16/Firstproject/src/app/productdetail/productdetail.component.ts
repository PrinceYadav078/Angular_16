import { Component, Input, ViewChild } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../Model/Product';
import { CloseProductDetailService } from '../Services/close-product-detail.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
  
})
export class ProductdetailComponent {

  constructor(public closeService:CloseProductDetailService){}

  product:Product

  @Input()
  productComp:ProductComponent=undefined

  ngOnInit(){
   this.product =this.productComp.selectedProduct;
  //  isOpen = this.closeService.isOpen
   
  }
  isOpen:boolean;
  ngOnChanges(){
    this.isOpen = this.closeService.isOpen
  }
  

  @ViewChild('prodDetailCard') prodCard:any
  
  closeProductDetailCard(){
    // this.isOpen = !this.isOpen;
    // console.log(this.isOpen)
    this.closeService.onClose()
    console.log(this.closeService.isOpen)
    console.log("isopen ",this.isOpen)
  
  }
}
