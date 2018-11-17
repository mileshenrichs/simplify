import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSetComponent } from './todo-set.component';

describe('TodoSetComponent', () => {
  let component: TodoSetComponent;
  let fixture: ComponentFixture<TodoSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
