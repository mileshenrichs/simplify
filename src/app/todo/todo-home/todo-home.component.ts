import { Component, OnInit } from '@angular/core';

import { Todo } from '../../core/models/Todo';

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
        completed: false
      },
      {
        task: 'Check in on Juno\'s messed up leg',
        deadline: new Date(),
        completed: false
      }
    ];
    this.showCompleted = false;
  }

  getActiveTodos(): Todo[] {
    return this.todos;
  }

  getCompletedTodos(): Todo[] {
    return this.todos;
  }

  toggleShowCompleted(): void {
    this.showCompleted = !this.showCompleted;
  }

}