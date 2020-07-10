import {Pipe, PipeTransform} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: NgbDateStruct): string {
    return value.year + '.' + (value.month < 10 ? '0' + value.month : value.month) + '.' +
      (value.day < 10 ? '0' + value.day : value.day);
  }
}
