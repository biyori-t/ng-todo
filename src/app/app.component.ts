import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from './features/task/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks$: Observable<string[]>;

  constructor(private readonly _tasksService: TasksService) {
    this.tasks$ = this._tasksService.task$;
  }
}
