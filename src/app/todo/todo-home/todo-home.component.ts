import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import Todo from '../../core/models/Todo';
import { CreateTodoDialogComponent } from '../create-todo-dialog/create-todo-dialog.component';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  todos: Todo[];
  showCompleted: boolean;

  ngOnInit() {
    this.todos = [
      {
        task: 'Become a billionaire',
        deadline: new Date(2018, 7, 1, 6, 0, 0, 0),
        isCompleted: false,
        inCompletedTransition: false
      },
      {
        task: 'Answer two questions on Astronomy Packback',
        deadline: new Date(2018, 10, 18, 18, 30, 0, 0),
        isCompleted: false,
        inCompletedTransition: false
      },
      {
        task: 'Wake up this morning',
        deadline: new Date(2018, 10, 18, 8, 0, 0, 0),
        isCompleted: true,
        inCompletedTransition: false
      },
      {
        task: 'Ask one question on Astronomy Packback',
        deadline: new Date(2018, 10, 19, 14, 0, 0, 0),
        isCompleted: false,
        inCompletedTransition: false
      },
      {
        task: 'Complete the Coursera HackerRank',
        deadline: new Date(2018, 10, 26, 0, 0, 0, 0),
        isCompleted: false,
        inCompletedTransition: false
      }
    ];
    this.showCompleted = true;
  }

  getActiveTodos(): Todo[] {
    return this.todos.filter(todo => !todo.isCompleted);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.isCompleted);
  }

  toggleShowCompleted(): void {
    this.showCompleted = !this.showCompleted;
  }

  onTodoCompleted(todo: Todo): void {
    const todoIndex = this.todos.indexOf(todo);
    this.todos[todoIndex].inCompletedTransition = true;
    this.initiateCompletionSequence(todoIndex);
  }

  initiateCompletionSequence(todoIndex: number) {
    // wait for fade-out animation, then set todo as completed
    const FADEOUT_ANIMATION_DURATION = 2900;
    setTimeout(() => {
      this.todos[todoIndex] = {
        ...this.todos[todoIndex],
        isCompleted: true,
        inCompletedTransition: false
      }
    }, FADEOUT_ANIMATION_DURATION);
  }

  onAddTodoButtonClick() {
    this.openCreateTodoDialog();
  }

  openCreateTodoDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      width: '60%',
      panelClass: 'create-todo-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
