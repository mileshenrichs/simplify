import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Todo from 'src/app/core/models/Todo';
import { DateService } from '../../core/services/date.service';

@Component({
  selector: 'app-todo-set',
  templateUrl: './todo-set.component.html',
  styleUrls: ['./todo-set.component.css']
})
export class TodoSetComponent implements OnInit {

  constructor(private dateService: DateService) { }

  @Input() todos: Todo[];
  @Input() setTitle: string;
  @Input() showCompleted: boolean;

  @Output() completedToggled = new EventEmitter();

  ngOnInit() {
    
  }

  onToggleCompleted(event: Event): void {
    this.completedToggled.emit();
  }

  onTodoClicked(event: Event): void {
    console.log(event);
  }

  formatDateForTooltip(date: Date): string {
    return this.dateService.formatDateForUncompletedPopover(date);
  }

  formatDateForInlineDisplay(date: Date, isCompleted: boolean): string {
    if(!isCompleted) {
      return 'tomorrow';
    } else {
      return this.dateService.formatDateForCompletedTask(date);
    }
  }
}
