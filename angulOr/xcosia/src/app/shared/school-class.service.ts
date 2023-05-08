import { Injectable } from '@angular/core';
import { SchoolClass } from '../models/school-class.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  constructor() { }

  getSchoolClasses(): SchoolClass[] { 
    return [
      { id: 1, name: "1BHIF", department: "Höhere Informatik", studentsCount: 12 },
      { id: 2, name: "3BHIF", department: "Höhere Informatik", studentsCount: 10 },
      { id: 3, name: "2BHIF", department: "Höhere Informatik", studentsCount: 18 },
      { id: 4, name: "5BHIF", department: "Höhere Informatik", studentsCount: 22 },
      { id: 5, name: "4BHIF", department: "Höhere Informatik", studentsCount: 8 },
      { id: 6, name: "5AKIF", department: "Kolleg Informatik", studentsCount: 15 },
      { id: 7, name: "5CAIF", department: "Aufbaulehrgang Informatik", studentsCount: 19 },
      { id: 8, name: "4AKIF", department: "Kolleg Informatik", studentsCount: 23 },
      { id: 9, name: "5BKIF", department: "Kolleg Informatik", studentsCount: 20 },
      { id: 10, name: "5AKIF", department: "Kolleg Informatik", studentsCount: 29 },
      { id: 11, name: "2AHIF", department: "Höhere Informatik", studentsCount: 32 },
      { id: 12, name: "5CHIF", department: "Höhere Informatik", studentsCount: 31 },
      { id: 13, name: "4AHKUI", department: "Kunst Und Design", studentsCount: 5 },
      { id: 14, name: "4DHIF", department: "Höhere Informatik", studentsCount: 17 },
      { id: 15, name: "4DHIF", department: "Höhere Informatik", studentsCount: 13 }
    ]
  }
}
