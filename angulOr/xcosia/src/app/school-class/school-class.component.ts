import { Component, Input } from '@angular/core';
import { SchoolClass } from '../models/school-class.model';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent {

  @Input()
  public schoolClass: SchoolClass | null;

  constructor() {
    this.schoolClass = null;
  }

  setSchoolClass(): void {
    console.log(this.schoolClass);
  }
}
