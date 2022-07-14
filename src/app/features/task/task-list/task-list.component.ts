import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: string[] = [];

  constructor(private readonly _tasksService: TasksService) {}

  ngOnInit(): void {}

  onDeleteTask(index: number) {
    this._tasksService.delete(index);
  }
}
