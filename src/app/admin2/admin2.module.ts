
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account2Component } from './account2/account2.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [Account2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    Account2Component
  ]
})
export class Admin2Module { }
