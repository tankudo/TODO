import {TestBed} from '@angular/core/testing';

import {SaveTODOService} from './save-todo.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TodoFace} from '../interface/todo-face';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

fdescribe('SaveTODOService', () => {
  let service: SaveTODOService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(SaveTODOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should order todo elements', () => {
    const d: NgbDateStruct = {year: 1, month: 2, day: 3};
    const t1: TodoFace = {task: 'A', priority: 1, date: d, upToDate: d};
    const t2: TodoFace = {task: 'B', priority: 2, date: d, upToDate: d};
    const t3: TodoFace = {task: 'C', priority: 3, date: d, upToDate: d};
    const t4: TodoFace = {task: 'D', priority: 4, date: d, upToDate: d};
    const t5: TodoFace = {task: 'E', priority: 5, date: d, upToDate: d};
    service.reset();
    service.preserveData(t1);
    service.preserveData(t5);
    service.preserveData(t3);
    service.preserveData(t2);
    service.preserveData(t4);
    service.sortTodos('priority');
    expect(service.todos.length).toEqual(1);
    expect(service.todos[0]).toEqual(t1);
    expect(service.todos[1]).toEqual(t2);
    expect(service.todos[2]).toEqual(t3);
    expect(service.todos[3]).toEqual(t4);
    expect(service.todos[4]).toEqual(t5);
  });
});
