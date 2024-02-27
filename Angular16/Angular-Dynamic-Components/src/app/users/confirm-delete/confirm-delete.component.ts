import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {
  
  @Input()
  userToDelete:User;

  @Output()
  onConfirmation:EventEmitter<boolean>=new EventEmitter<boolean>();

  onConfirmationBtnClicked(value:boolean){
    this.onConfirmation.emit(value);
  }
}
