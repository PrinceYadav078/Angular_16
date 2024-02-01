import { Component } from '@angular/core';

@Component({
  selector: 'app-header',  //htmltag selector
  // selector: '[app-header]'   htmlattribute selector
  // selector:'.app-header' CSS class Selector
  // selector:'.#app-header' CSS ID Selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title="Attire Hills"
}
