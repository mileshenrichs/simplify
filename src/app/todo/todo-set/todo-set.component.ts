import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/core/models/Todo';

@Component({
  selector: 'app-todo-set',
  templateUrl: './todo-set.component.html',
  styleUrls: ['./todo-set.component.css']
})
export class TodoSetComponent implements OnInit {

  constructor() { }

  @Input() todos: Todo[];
  @Input() setTitle: string;
  @Input() showCompleted: boolean;

  @Output() completedToggled = new EventEmitter();

  ngOnInit() {
    
  }

  onToggleCompleted(event: Event): void {
    this.completedToggled.emit();
  }

}
