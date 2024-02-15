import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  OnSubscribe(){
    let subService=new SubscribeService();
    subService.onSubscribeClicked('quaterly')
  }
}
