export class SchoolClass {
    id: number;
    name: string;
    department: string;
    studentsCount: number;
    
    constructor(id: number, name: string, department: string, studentsCount: number) {
        this.id = id;
        this.name = name;
        this.department=department;
        this.studentsCount=studentsCount;
     }
}