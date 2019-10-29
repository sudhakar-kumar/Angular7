import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComp23Component } from './test-comp23/test-comp23.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComp23Component,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
