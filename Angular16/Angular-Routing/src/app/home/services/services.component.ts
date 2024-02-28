import { Component, inject } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesService = inject(ServiceService);
    services: {title: string, image: string, description: string}[] = [];

    ngOnInit(){
        this.services = this.servicesService.services;
  }
}
