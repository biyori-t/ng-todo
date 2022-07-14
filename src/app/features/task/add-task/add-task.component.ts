import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task: string = '';

  constructor(private readonly _tasksService: TasksService) {}

  ngOnInit(): void {}

  onAddTask() {
    this._tasksService.add(this.task);
    this.task = '';
  }
}
