import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent, AddTaskComponent],
  imports: [CommonModule, FormsModule],
  exports: [TaskListComponent, AddTaskComponent],
})
export class TaskModule {}
