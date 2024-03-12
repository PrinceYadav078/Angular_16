import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements AfterViewInit{
  
  @Input()
  isEdit:boolean=false;
  
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData:EventEmitter<Task>= new EventEmitter<Task>();

  @Input()
  selectedTask:Task;

  @ViewChild('taskForm')
  taskForm:NgForm

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.taskForm.form.patchValue(this.selectedTask)
    })
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  onFormSubmitted(form: NgForm){
    this.EmitTaskData.emit(form.value)
    this.CloseForm.emit(false);
    console.log(form.value)
  }
}
