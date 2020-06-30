import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public tasksSer: TasksService, public router: Router) { }

  ngOnInit(): void {
  }

  saveTask(tit, dec) {
    this.tasksSer.saveTask(tit.value,dec.value);
    this.router.navigate(['/']);
  }

}
