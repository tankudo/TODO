import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      priority: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(8)]),
      task: new FormControl(null, [Validators.required, Validators.maxLength(50)])
    });
  }

  ngOnInit(): void {
  }

}
