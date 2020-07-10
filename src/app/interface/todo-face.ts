import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export interface TodoFace {
  priority: number;
  task: string;
  date: NgbDateStruct;
  upToDate: NgbDateStruct ;
}
