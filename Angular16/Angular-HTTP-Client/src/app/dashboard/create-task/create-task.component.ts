import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData:EventEmitter<Task>= new EventEmitter<Task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  onFormSubmitted(form: NgForm){
    this.EmitTaskData.emit(form.value)
    this.CloseForm.emit(false);
    console.log(form.value)
  }
}
