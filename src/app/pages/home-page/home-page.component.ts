import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tasks$ } from 'src/app/features/task/todo.repository';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  tasks$: Observable<string[]>;

  constructor() {
    this.tasks$ = tasks$;
  }

  ngOnInit(): void {
    tasks$.subscribe((tasks) => console.log(tasks));
  }
}
