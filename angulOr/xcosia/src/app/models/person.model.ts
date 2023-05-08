import { SchoolClass } from "./school-class.model";

export class Person {
    id : number = 0;
    firstname: string = "";
    lastname: string = "";
    eMail: string = "";
    schoolClass?: SchoolClass
}