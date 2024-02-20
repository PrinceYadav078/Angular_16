import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseProductDetailService {

  isOpen=true;
  onClose(){
    this.isOpen= !this.isOpen
  }
}
