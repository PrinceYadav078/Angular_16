import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  @Input()
  product:Product;
   
}
