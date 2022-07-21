import { createStore, select, withProps } from '@ngneat/elf';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Todo {
  tasks: string[];
}

export const store = createStore(
  { name: 'todo' },
  withProps<Todo>({ tasks: ['task1', 'task2', 'task3'] })
);

export const task$ = store.pipe(select((state) => state.tasks));
