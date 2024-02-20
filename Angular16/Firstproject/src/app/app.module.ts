import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FormsModule} from '@angular/forms';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SetBackground } from './CustomDirectives/SetBackround.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableproductDirective } from './CustomDirectives/disableproduct.directive';
import { CloseProductDetailService } from './Services/close-product-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductlistComponent,
    SearchbarComponent,
    FilterComponent,
    ProductdetailComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableproductDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  
  ],
  providers: [CloseProductDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
