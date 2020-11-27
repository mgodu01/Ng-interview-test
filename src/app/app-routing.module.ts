import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditEnrollmentComponent } from './components/edit-enrollment/edit-enrollment.component';
import { EnrollManagementComponent } from './components/enroll-management/enroll-management.component';


const routes: Routes = [
  {path:'', component: EnrollManagementComponent},
  {path:':id', component: EditEnrollmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
