import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentsUrl = 'http://localhost:8080/student/students';
 
  constructor(
    private http: HttpClient
  ) { }


  public addStudents(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.studentsUrl, student )
  }

  public getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentsUrl);
  }
  
}
