import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoSetComponent } from './todo-set/todo-set.component';

@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoSetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
