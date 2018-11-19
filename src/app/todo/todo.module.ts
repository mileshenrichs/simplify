import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoSetComponent } from './todo-set/todo-set.component';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';

@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoSetComponent,
    CreateTodoDialogComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    CreateTodoDialogComponent
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
