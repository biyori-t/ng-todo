import { Component, OnInit } from '@angular/core';
import { TodoRepository } from '../todo.repository';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task: string = '';

  constructor(private readonly _todoRepository: TodoRepository) {}

  ngOnInit(): void {}

  onAddTask() {
    this._todoRepository.addTask(this.task);
    this.task = '';
  }
}
