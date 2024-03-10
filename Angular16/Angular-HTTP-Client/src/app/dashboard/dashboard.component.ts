import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;

  http: HttpClient = inject(HttpClient);

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
    const header = new HttpHeaders({ 'my-header': 'create-task' });
    console.log(data);
    this.http.post<{ name: string }>(
      'https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks.json',
      data,
      { headers: header }
    ).subscribe((response) => {
      console.log(response)
    });
  }

  onFetchTaskClicked() {
    this.fetchAllTasks()
  }

  fetchAllTasks() {
    this.http.get<{ [key: string]: Task }>('https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks.json').pipe(map((response) => {
      //TRANSFORM DATA
      let tasks = [];
      for (let key in response) {
        if (response.hasOwnProperty(key)) {
          tasks.push({ ...response[key], id: key })
        }
      }
      return tasks;
    })).subscribe((tasks) => {
      this.allTasks = tasks
      // console.log(tasks);
    })
  }

  DeleteTask(id: string) {
    this.http.delete(`https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks/${id}.json`).subscribe(() => alert("Task Deleted Succesfully"))
  }

  DeleteAllTask() {
    this.http.delete("https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks.json").subscribe(() => alert("All Tasks Deleted Succesfully"))
  }

}
