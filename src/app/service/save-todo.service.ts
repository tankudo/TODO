import {Injectable} from '@angular/core';
import {TodoFace} from '../interface/todo-face';

@Injectable({
  providedIn: 'root'
})
export class SaveTODOService {
  get archiveTodos(): TodoFace[] {
    return this.archiveTodosF;
  }

  get todos(): TodoFace[] {
    return this.todosF;
  }

  private todosF: TodoFace[];
  private archiveTodosF: TodoFace[];

  constructor() {
    const data = JSON.parse(localStorage.getItem('todos'));
    const archiveData = JSON.parse(localStorage.getItem('archive'));
    if (data) {
      this.todosF = data;
    } else {
      this.todosF = [];
    }
    if (archiveData) {
      this.archiveTodosF = archiveData;
    } else {
      this.archiveTodosF = [];
    }
  }

  sortTodos(fieldName: string): void {
    this.todosF.sort((a, b) =>
      a[fieldName] > b[fieldName] ? 1 : a[fieldName] < b[fieldName] ? -1 : 0);
  }

  sortArchive(fieldName: string): void {
    this.archiveTodosF.sort((a, b) =>
      a[fieldName] > b[fieldName] ? 1 : a[fieldName] < b[fieldName] ? -1 : 0);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todosF));
  }

  saveArchiveToLocalStorage(): void {
    localStorage.setItem('archive', JSON.stringify(this.archiveTodosF));
  }

  preserveData(todo): void {
    this.todosF.push(todo);
    this.sortTodos('priority');
    this.saveToLocalStorage();
  }

  preserveArchiveData(t): void {
    this.archiveTodos.push(t);
    const indx = this.todos.indexOf(t);
    this.todos.splice(indx, 1);
    this.saveArchiveToLocalStorage();
    this.saveToLocalStorage();
  }
  reset(): void{
    this.todosF = [];
    this.archiveTodosF = [];
  }
}
