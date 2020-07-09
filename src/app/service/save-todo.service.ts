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
}
