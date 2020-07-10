import {Component, Input, OnInit} from '@angular/core';
import {SaveTODOService} from '../../service/save-todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  buttonLink: string;
  @Input()
  buttonText: string;
  @Input()
  headerText: string;
  @Input()
  buttonText2: string;
  @Input()
  displayClass: string;

  constructor(private saveTODOService: SaveTODOService) {
  }

  ngOnInit(): void {
  }
}
