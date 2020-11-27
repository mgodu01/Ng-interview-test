import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatTableModule } from '@angular/material';
import { EnrollManagementComponent } from './components/enroll-management/enroll-management.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditEnrollmentComponent } from './components/edit-enrollment/edit-enrollment.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrollManagementComponent,
    EditEnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
