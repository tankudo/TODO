import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SaveTODOService} from '../../service/save-todo.service';
import {TodoFace} from '../../interface/todo-face';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  form: FormGroup;
  model: NgbDateStruct;

  constructor(private saveTODOService: SaveTODOService) {
    this.form = new FormGroup({
      priority: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(8)]),
      task: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      upToDate: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addTodos(): void {
    const todo: TodoFace = {
      priority: this.form.get('priority').value,
      task: this.form.get('task').value,
      date: new Date().toDateString(),
      upToDate: this.form.get('upToDate').value
    };
    this.saveTODOService.preserveData(todo);
  }
}
