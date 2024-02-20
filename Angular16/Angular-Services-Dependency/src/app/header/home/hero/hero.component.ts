import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers:[SubscribeService] //2. WHAT TO PROVIDE 
})
export class HeroComponent {

  //1. How TO PROVIDE DEPENDENCY
  // constructor(private subService:SubscribeService){

  // }

  //2. SECOND WAY TO PROVIDE DEPENDENCY
  subService =inject(SubscribeService);

  OnSubscribe(){
    // let subService=new SubscribeService();
    // subService.onSubscribeClicked('monthly')
    this.subService.onSubscribeClicked('monthly')
  }
}
