import { createStore, select, withProps } from '@ngneat/elf';

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
  store.update((state) => ({ ...state, tasks: [...state.tasks, task] }));
}

export function getTasks(): string[] {
  return store.value.tasks;
}

export function deleteTask(index: number): void {
  store.update((state) => {
    const tasks = state.tasks;
    tasks.splice(index, 1);
    return { ...state, tasks: [...tasks] };
  });
}
