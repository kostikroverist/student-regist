import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { StudentsService } from '../shared/services/students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mimeType } from '../shared/validators/mime-type.validator';
import { Student } from '../shared/models/student.model';
import { IStudent } from '../shared/interfaces/student.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  form: FormGroup;
  imagePreview: string;
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, Validators.pattern(/\d/), Validators.maxLength(2)]),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    })
  }
  public addStudent(): void {
    if (this.form.invalid) {
      return;
    }
    const student = new Student(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.age,
      this.imagePreview
    )
    this.studentsService.addStudents(student).subscribe(() => {
      this.form.reset();
      this.imagePreview = '';
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).setErrors(null) ;
      });
      console.log('success')
    });
  }

  public onImagePicked(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = (reader.result as string);
    }
    reader.readAsDataURL(file);
  }
 
}

 