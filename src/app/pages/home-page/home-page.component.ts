import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoRepository } from 'src/app/features/task/todo.repository';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  tasks$: Observable<string[]>;

  constructor(private readonly _todoRepository: TodoRepository) {
    this.tasks$ = this._todoRepository.tasks$;
  }

  ngOnInit(): void {
    this.tasks$.subscribe((tasks) => console.log(tasks));
  }
}
