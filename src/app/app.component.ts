import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  task: string = '';
  tasks = ['task1', 'task2', 'task3'];

  addTask() {
    if (this.task == '') {
      return;
    }

    this.tasks.push(this.task);
    this.task = '';
  }
}
