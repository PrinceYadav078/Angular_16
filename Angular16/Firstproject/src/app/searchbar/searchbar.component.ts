import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchText: string = '';

@Output()
searchTextChanged:EventEmitter<string>= new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchText);
  // }

  @ViewChild('searchinput') searchInpEle:ElementRef

  setSearchText(){
    this.searchText=this.searchInpEle.nativeElement.value
    this.searchTextChanged.emit(this.searchText);
  }
}
