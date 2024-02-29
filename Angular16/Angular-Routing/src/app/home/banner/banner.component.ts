import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  searchValue:string='';
  router:Router=inject(Router)

  onChange(event:any){
    this.searchValue=event.target.value
  }
  onSearchClicked(inputValue:string){
    this.router.navigate(['/Courses'], {queryParams:{search:inputValue}})
  }
}
