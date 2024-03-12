import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';


import { TaskService } from '../Services/task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  taskService:TaskService=inject(TaskService);
  isEdit:boolean=false;
  allTasks: Task[] = [];
  selectedTask:Task
  currentTaskId:string="";
  isLoading:boolean=false;

  ngOnInit() {
    this.fetchAllTasks()
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.isEdit=false
    this.selectedTask={title:"",desc:"",assignedTo:"",createdAt:"",priority:"",status:""}

  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(data: Task) {
    if(!this.isEdit){
      this.taskService.CreateTask(data);
    }else{
      this.taskService.UpdateTask(this.currentTaskId, data);
    }
    
    this.fetchAllTasks()

  }


  fetchAllTasks() {
    this.isLoading=true;
    this.taskService.fetchAllTasks().subscribe((tasks) => {
      this.allTasks = tasks
      this.isLoading=false;
      console.log(tasks);
    })
  }

  DeleteTask(id: string ) {
    this.taskService.DeleteTask(id)
    this.fetchAllTasks()
  }

  DeleteAllTask() {
   this.taskService.DeleteAllTask();
   this.fetchAllTasks()
  }

  onEditClicked(id:string | undefined){
    this.currentTaskId=id;
    this.showCreateTaskForm = true;
    this.isEdit=true;
    this.selectedTask=this.allTasks.find((task)=>{
      return task.id===id;
    })
  }
}
