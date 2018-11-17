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

  ngOnInit() {
    this.todos = [];
  }

}
