import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
