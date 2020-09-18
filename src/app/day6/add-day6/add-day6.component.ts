
import { day6 } from './../servicess/day6.model';
import { ServicessService } from './../servicess/servicess.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-day6',
  templateUrl: './add-day6.component.html',
  styleUrls: ['./add-day6.component.css']
})
export class AddDay6Component implements OnInit {


  formGroup: FormGroup;
  constructor(
    private day6Service:ServicessService,
    private formBuilder:FormBuilder
  ) { }

  onSubmitForm(){
    this.day6Service.create(this.formGroup.value).subscribe((res:any)=>{
      console.log("success");
      this.route.navigation(['/']);
    })
  }
  ngOnInit(): void {
  }

}
