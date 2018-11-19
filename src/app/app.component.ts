import { Component, ViewChild } from '@angular/core';
import { TodoHomeComponent } from './todo/todo-home/todo-home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild(TodoHomeComponent)
  todoHome: TodoHomeComponent;

  onAddTodoButtonClick() {
    console.log('AppComponent.onAddTodoButtonClick()');
    this.todoHome.onAddTodoButtonClick();
  }

}
