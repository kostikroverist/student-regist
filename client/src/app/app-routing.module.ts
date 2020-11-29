import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full'},  
  { path: 'registration', component: RegistrationComponent },  
  { path: 'list', component: StudentsListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
