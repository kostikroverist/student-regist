import { IStudent } from '../interfaces/student.interface';

export class Student implements IStudent{
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public url: string
    ) { }
}