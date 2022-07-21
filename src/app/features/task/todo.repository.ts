import { Injectable } from '@angular/core';
import { createStore, select, setProp, withProps } from '@ngneat/elf';

interface Todo {
  tasks: string[];
}

const store = createStore(
  { name: 'todo' },
  withProps<Todo>({ tasks: ['task1', 'task2', 'task3'] })
);

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  get tasks$() {
    return store.pipe(select((state) => state.tasks));
  }

  addTask(task: string): void {
    if (task == '') {
      return;
    }

    const tasks = this.getTasks();

    store.update(setProp('tasks', [...tasks, task]));
  }

  getTasks(): string[] {
    return store.value.tasks;
  }

  deleteTask(index: number): void {
    const tasks = this.getTasks();
    tasks.splice(index, 1);

    store.update(setProp('tasks', [...tasks]));
  }
}
