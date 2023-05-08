import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { SchoolClass } from '../models/school-class.model';
import { SchoolClassService } from './school-class.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private schoolClasses: SchoolClass[];

  constructor(private schoolClassService: SchoolClassService) {
    this.schoolClasses = schoolClassService.getSchoolClasses();
   }

  getStudents(): Person[] { 
    return [
      { id: 0, firstname: "anna", lastname: "theke", eMail: "ann@theke.at", schoolClass: this.schoolClasses.find(s => s.id === 1) },
      { id: 1, firstname: "Max", lastname: "Mustermann", eMail: "max.mustermann@example.com", schoolClass: this.schoolClasses.find(s => s.id === 2) },
      { id: 2, firstname: "Anna", lastname: "Müller", eMail: "anna.mueller@example.com", schoolClass: this.schoolClasses.find(s => s.id === 1) },
      { id: 3, firstname: "Tobias", lastname: "Schmidt", eMail: "tobias.schmidt@example.com", schoolClass: this.schoolClasses.find(s => s.id === 3) },
      { id: 4, firstname: "Lisa", lastname: "Fischer", eMail: "lisa.fischer@example.com", schoolClass: this.schoolClasses.find(s => s.id === 3) },
      { id: 5, firstname: "Sophie", lastname: "Meyer", eMail: "sophie.meyer@example.com", schoolClass: this.schoolClasses.find(s => s.id === 5) },
      { id: 6, firstname: "Julian", lastname: "Schulz", eMail: "julian.schulz@example.com", schoolClass: this.schoolClasses.find(s => s.id === 5) },
      { id: 7, firstname: "Nina", lastname: "Wagner", eMail: "nina.wagner@example.com", schoolClass: this.schoolClasses.find(s => s.id === 6) },
      { id: 8, firstname: "Tim", lastname: "Hoffmann", eMail: "tim.hoffmann@example.com", schoolClass: this.schoolClasses.find(s => s.id === 4) },
      { id: 9, firstname: "Lena", lastname: "Koch", eMail: "lena.koch@example.com", schoolClass: this.schoolClasses.find(s => s.id === 5) },
      { id: 10, firstname: "Felix", lastname: "Bauer", eMail: "felix.bauer@example.com", schoolClass: this.schoolClasses.find(s => s.id === 4) },
      { id: 11, firstname: "Sarah", lastname: "Schneider", eMail: "sarah.schneider@example.com", schoolClass: this.schoolClasses.find(s => s.id === 3) },
      { id: 12, firstname: "Jan", lastname: "Becker", eMail: "jan.becker@example.com", schoolClass: this.schoolClasses.find(s => s.id === 7) },
      { id: 13, firstname: "Laura", lastname: "Hermann", eMail: "laura.hermann@example.com", schoolClass: this.schoolClasses.find(s => s.id === 8) },
      { id: 14, firstname: "David", lastname: "Krause", eMail: "david.krause@example.com", schoolClass: this.schoolClasses.find(s => s.id === 8) },
      { id: 15, firstname: "Mona", lastname: "Bergmann", eMail: "mona.bergmann@example.com", schoolClass: this.schoolClasses.find(s => s.id === 9) },
      { id: 16, firstname: "Markus", lastname: "Schultz", eMail: "markus.schultz@example.com", schoolClass: this.schoolClasses.find(s => s.id ===9) },
      { id: 17, firstname: "Caroline", lastname: "Kaiser", eMail: "caroline.kaiser@example.com", schoolClass: this.schoolClasses.find(s => s.id === 9) },
      { id: 18, firstname: "Nils", lastname: "Lange", eMail: "nils.lange@example.com", schoolClass: this.schoolClasses.find(s => s.id === 7) },
      { id: 19, firstname: "Jana", lastname: "Werner", eMail: "jana.werner@example.com", schoolClass: this.schoolClasses.find(s => s.id === 1) },
      { id: 20, firstname: "Tom", lastname: "Kuhn", eMail: "tom.kuhn@example.com", schoolClass: this.schoolClasses.find(s => s.id === 1) },
    ]
  }
}
