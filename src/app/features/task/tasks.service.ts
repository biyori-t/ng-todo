import { Injectable } from '@angular/core';
import { addTask, deleteTask, tasks$ } from './todo.repository';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  get tasks$() {
    return tasks$;
  }

  constructor() {}

  add(task: string): void {
    if (task == '') {
      return;
    }

    addTask(task);
  }

  delete(index: number) {
    deleteTask(index);
  }
}
