import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [];
  constructor() {
    let savedtasks = localStorage.getItem('tasks');
    if (savedtasks) {
      this.tasks = JSON.parse(savedtasks);
    }
    else {
      this.tasks = [];
    }
   }

  deleteTask(i) {
    this.tasks.splice(i,1);
    this.saveALL();
  }

  deleteAllTask() {
    this.tasks = [];
    this.saveALL();
  }

  saveTask(title, description) {
    this.tasks.push({title,description});
    this.saveALL();
  }

  editTask(i,data) {
    this.tasks[i] = data;
    this.saveALL();
  }

  saveALL() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
