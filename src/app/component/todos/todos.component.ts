import {Component, OnInit} from '@angular/core';
import {TodoFace} from '../../interface/todo-face';
import {SaveTODOService} from '../../service/save-todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: TodoFace[];

  constructor(private saveTODOService: SaveTODOService) {
    this.todos = saveTODOService.todos;
  }

  ngOnInit(): void {
  }

  completeTodo(t: TodoFace): void {
    this.saveTODOService.archiveTodos.push(t);
    const indx = this.saveTODOService.todos.indexOf(t);
    this.saveTODOService.todos.splice(indx, 1);

  }
}
