
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day6Component } from './day6/day6.component';
import {ServicessService} from '../day6/servicess/servicess.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AddDay6Component } from './add-day6/add-day6.component';
@NgModule({
   declarations: [Day6Component, 
  AddDay6Component
],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    AppRoutingModule
  ],
  providers:[
    ServicessService
  ],
  exports:[
    Day6Component
  ]
})
export class AdminModule { }
