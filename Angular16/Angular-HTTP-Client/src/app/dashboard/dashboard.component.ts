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

  allTasks: Task[] = [];

  ngOnInit() {
    this.fetchAllTasks()
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateTask(data: Task) {
    this.taskService.CreateTask(data);
    this.fetchAllTasks()
  }


  fetchAllTasks() {
    this.taskService.fetchAllTasks().subscribe((tasks) => {
      this.allTasks = tasks
      console.log(tasks);
    })
  }

  DeleteTask(id: string) {
    this.taskService.DeleteTask(id)
    this.fetchAllTasks()
  }

  DeleteAllTask() {
   this.taskService.DeleteAllTask();
   this.fetchAllTasks()
  }

}
