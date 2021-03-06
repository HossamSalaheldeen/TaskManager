import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tasksSer: TasksService) { }

  ngOnInit(): void {
  }

  deleteTask(i) {
    this.tasksSer.deleteTask(i);
  }

  deleteAllTask() {
    this.tasksSer.deleteAllTask();
  }
}
