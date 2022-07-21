import { Injectable } from '@angular/core';
import { TodoRepository } from './todo.repository';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly _todoRepository = new TodoRepository();

  get tasks$() {
    return this._todoRepository.tasks$;
  }

  constructor() {}

  add(task: string): void {
    if (task == '') {
      return;
    }

    this._todoRepository.addTask(task);
  }

  delete(index: number) {
    this._todoRepository.deleteTask(index);
  }
}
