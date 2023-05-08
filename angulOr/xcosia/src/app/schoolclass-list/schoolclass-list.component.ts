import { Component } from '@angular/core';
import { SchoolClass } from './../models/school-class.model'
import { SchoolClassService } from '../shared/school-class.service';
@Component({
  selector: 'app-schoolclass-list',
  templateUrl: './schoolclass-list.component.html',
  styleUrls: ['./schoolclass-list.component.css']
})
export class SchoolclassListComponent {

  constructor(private schoolClassService: SchoolClassService) {
  }

  getData() {
    return this.schoolClassService.getSchoolClasses();
  }
}
