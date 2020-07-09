import {Injectable} from '@angular/core';
import {TodoFace} from '../interface/todo-face';

@Injectable({
  providedIn: 'root'
})
export class SaveTODOService {
  todos: TodoFace[];
  archiveTodos: TodoFace[];

  constructor() {
    this.todos = [];
    this.archiveTodos = [];
  }

  sortTodos(colName: string): void {
    this.todos.sort((a, b) =>
      a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
  }
  sortArchive(fieldName: string): void{
    this.archiveTodos.sort((a, b) =>
      a[fieldName] > b[fieldName] ? 1 : a[fieldName] < b[fieldName] ? -1 : 0);
  }
}
