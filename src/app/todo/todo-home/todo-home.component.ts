import { Component, OnInit } from '@angular/core';

import Todo from '../../core/models/Todo';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  constructor() { }

  todos: Todo[];
  showCompleted: boolean;

  ngOnInit() {
    this.todos = [
      {
        task: 'Become an Angular master',
        deadline: new Date(),
        isCompleted: false
      },
      {
        task: 'Check in on Juno\'s messed up leg',
        deadline: new Date(),
        isCompleted: false
      },
      {
        task: 'Wake up this morning',
        deadline: new Date(),
        isCompleted: true
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

}
