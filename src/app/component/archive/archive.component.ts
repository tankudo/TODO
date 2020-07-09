import {Component, Input, OnInit} from '@angular/core';
import {SaveTODOService} from '../../service/save-todo.service';
import {TodoFace} from '../../interface/todo-face';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveTODO: TodoFace[];

  constructor(private saveTODOService: SaveTODOService) {
    this.archiveTODO = this.saveTODOService.archiveTodos;
    this.saveTODOService.sortArchive('priority');
  }

  ngOnInit(): void {
  }

  deleteTodo(t: TodoFace): void {
    const indx = this.archiveTODO.indexOf(t);
    this.archiveTODO.splice(indx, 1);

  }
}
