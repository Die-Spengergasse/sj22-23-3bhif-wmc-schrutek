import { Component } from '@angular/core';
import { SchoolClass } from './../models/school-class.model'
import { SchoolClassService } from '../shared/school-class.service';
@Component({
  selector: 'spg-schoolclass-list',
  templateUrl: './schoolclass-list.component.html',
  styleUrls: ['./schoolclass-list.component.css']
})
export class SchoolclassListComponent {

  constructor(private schoolClassService: SchoolClassService) {
  }

  getData() {
    return this.schoolClassService.getSchoolClasses();
  }

  setSelectedSchoolClass(schoolClass: SchoolClass) {
    console.log(schoolClass);
    this.getStudentsBySchoolClass(schoolClass.id);
  }

  getStudentsBySchoolClass(id: number): void {
    // TODO: TODOs bitte in einem eigenen Branch "XCosia" in eurem WMC-Repo 
    // TODO: Studenten dieser Klasse laden (Verwendung: StudentService)
    // TODO: Liste von Studenten im HTML auch anzeigen
    // TODO: Liste soll 2-spaltig ausgeführt sein
  }
}
