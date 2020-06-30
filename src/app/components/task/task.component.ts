import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId;
  task;
  constructor(public route: ActivatedRoute, public tasksSer: TasksService, public router: Router) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksSer.tasks[this.taskId];
  }

  saveTask() {
    this.tasksSer.editTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }

  deleteTask() {
    this.tasksSer.deleteTask(this.taskId);
    this.router.navigate(['/']);
  }

}
