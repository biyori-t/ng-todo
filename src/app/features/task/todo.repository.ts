import { createStore, select, setProp, withProps } from '@ngneat/elf';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Todo {
  tasks: string[];
}

export const store = createStore(
  { name: 'todo' },
  withProps<Todo>({ tasks: ['task1', 'task2', 'task3'] })
);

export const tasks$ = store.pipe(select((state) => state.tasks));

export function addTask(task: string): void {
  const tasks = getTasks();

  store.update(setProp('tasks', [...tasks, task]));
}

export function getTasks(): string[] {
  return store.value.tasks;
}

export function deleteTask(index: number): void {
  const tasks = getTasks();
  tasks.splice(index, 1);

  store.update(setProp('tasks', tasks));
}
