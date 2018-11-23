import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import Todo from 'src/app/core/models/Todo';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrls: ['./create-todo-dialog.component.css']
})
export class CreateTodoDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreateTodoDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      task: '' 
    });

    this.form.valueChanges.subscribe(console.log);
  }

  onCreateClick() {
    this.dialogRef.close(this.form.value);
  }

}
