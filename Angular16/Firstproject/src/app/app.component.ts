import { Component, Input } from '@angular/core';

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
}
