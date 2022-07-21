import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/features/task/tasks.service';
import { store, task$ } from 'src/app/features/task/todo.repository';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  tasks$: Observable<string[]>;

  constructor(private readonly _tasksService: TasksService) {
    this.tasks$ = this._tasksService.task$;
  }

  ngOnInit(): void {
    task$.subscribe((tasks) => console.log(tasks));
  }
}
