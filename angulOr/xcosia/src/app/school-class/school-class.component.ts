import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SchoolClass } from '../models/school-class.model';

@Component({
  selector: 'spg-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent {

  @Input()
  public schoolClass: SchoolClass | null;
  @Output()
  public schoolClassClickEvent = new EventEmitter<SchoolClass>();

  constructor() {
    this.schoolClass = null;
  }

  schoolClassClicked(): void {
    if (this.schoolClass !== null) {
      this.schoolClassClickEvent.emit(this.schoolClass);
    }
  }
}
