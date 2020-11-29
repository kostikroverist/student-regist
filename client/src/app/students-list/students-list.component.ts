import { Component, OnInit } from '@angular/core';
import { IStudent } from '../shared/interfaces/student.interface';
import { StudentsService } from '../shared/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: IStudent[] = [];

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(): void {
    this.studentsService.getStudents()
      .subscribe(data => {
        this.students = data
        console.log(this.students);
      });
  }
}
