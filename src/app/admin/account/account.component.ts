import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'; // b3
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // email = new FormControl(''); //b4
  // changEmail(){
  //   this.email.setValue("abc@gmail.com");
  // }
  formInfo = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl('')
  })
  onSubmit(){
    console.log(this.formInfo.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
