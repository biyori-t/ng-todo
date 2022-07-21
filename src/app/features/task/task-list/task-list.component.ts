import { Component, Input, OnInit } from '@angular/core';
import { TodoRepository } from '../todo.repository';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: string[] = [];

  constructor(private readonly _todoRepository: TodoRepository) {}

  ngOnInit(): void {
    console.log(this.tasks);
  }

  onDeleteTask(index: number) {
    this._todoRepository.deleteTask(index);
  }
}
