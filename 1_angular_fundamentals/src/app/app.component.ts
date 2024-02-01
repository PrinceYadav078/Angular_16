import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prince Yadav';
  isheader:boolean=false;
  age:number=50;
  name:string="Tushar Satalkar"

  employee:any[]=[
    {id:101,name:'Prince Yadav'},
    {id:102,name:'Tushar Yadav'},
    {id:103,name:'Mohit Yadav'},
    {id:104,name:'Priyanshu Yadav'},
    {id:105,name:'Prajwal Yadav'},
  ]

  showHeader(){
    this.isheader=true;
  }
  hideHeader(){
    this.isheader=false;
  }
  
}
