import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // providers:[SubscribeService] //2. WHAT TO PROVIDE 
})
export class SidebarComponent {

  //1. How TO PROVIDE DEPENDENCY
  constructor(private subService:SubscribeService){

  }

  OnSubscribe(){
    // let subService=new SubscribeService();
    // subService.onSubscribeClicked('quaterly')
    this.subService.onSubscribeClicked('quaterly')
  }
}
