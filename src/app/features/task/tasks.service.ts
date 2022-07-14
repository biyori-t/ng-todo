import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly tasks = new BehaviorSubject<string[]>([
    'task1',
    'task2',
    'task3',
  ]);
  get task$() {
    return this.tasks.asObservable();
  }

  constructor() {}

  get(): string[] {
    return [...this.tasks.value];
  }

  add(task: string): void {
    if (task == '') {
      return;
    }

    this.tasks.next([...this.tasks.value, task]);
  }

  delete(index: number) {
    const tasks = this.get();
    tasks.splice(index, 1);

    this.tasks.next([...tasks]);
  }
}
