import { Component, EventEmitter, Output } from '@angular/core';

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

  setSearchText(inputele:HTMLInputElement){
    this.searchText=inputele.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
