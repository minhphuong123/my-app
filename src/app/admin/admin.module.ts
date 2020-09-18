import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule} from '@angular/forms';//form b1
import { TestFormControlComponent } from './test-form-control/test-form-control.component'; 
@NgModule({
  declarations: [AccountComponent, TestFormControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule //form b2
  ],
  exports:[
    AccountComponent,
    TestFormControlComponent
  ]
})
export class AdminModule { }
