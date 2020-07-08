import { TestBed } from '@angular/core/testing';

import { SaveTODOService } from './save-todo.service';

describe('SaveTODOService', () => {
  let service: SaveTODOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveTODOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
