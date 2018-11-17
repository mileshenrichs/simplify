import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoSetComponent } from './todo-set/todo-set.component';

@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoSetComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
