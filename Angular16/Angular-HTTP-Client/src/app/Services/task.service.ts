import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  http: HttpClient = inject(HttpClient);

  CreateTask(task: Task) {
    const header = new HttpHeaders({ 'my-header': 'create-task' });
    console.log(task);
    this.http.post<{ name: string }>(
      'https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks.json',
      task,
      { headers: header }
    ).subscribe((response) => {
      console.log(response)

    });
  }

  fetchAllTasks() {
    return this.http.get<{ [key: string]: Task }>('https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks.json').pipe(map((response) => {
      //TRANSFORM DATA
      let tasks = [];
      for (let key in response) {
        if (response.hasOwnProperty(key)) {
          tasks.push({ ...response[key], id: key })
        }
      }
      return tasks;
    }))
  }

  DeleteTask(id: string) {
    this.http.delete(`https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks/${id}.json`).subscribe()

  }

  DeleteAllTask() {
    this.http.delete("https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks.json").subscribe()
  }

  UpdateTask(id:string | undefined , data:Task){
    this.http.put(`https://angularhttpclient-11bb8-default-rtdb.firebaseio.com/tasks/${id}.json`,data).subscribe();
  }
}
