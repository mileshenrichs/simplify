import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoSetComponent } from './todo-set/todo-set.component';

@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoSetComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatListModule,
    MatTooltipModule
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
