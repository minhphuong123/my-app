
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-account2',
  templateUrl: './account2.component.html',
  styleUrls: ['./account2.component.css']
})
export class Account2Component implements OnInit {


  email = new FormControl('Email Address ... ');
  dangky(){
    if(this.email.value == '')
    {
      this.email.setValue('email is required!');
    }
  }
  // info = new FormGroup({
  //   name :  new FormControl(''),
  //   phone :  new FormControl(''),
  //   id :  new FormControl('')
  // })
  constructor(private fb:FormBuilder) { }
  info = this.fb.group({
       name: ['',[Validators.required, Validators.pattern("[A-Za-z]{1,10}")]],
      phone : this.fb.group({
        phone1 : ['',[Validators.pattern('[0-9]{1,10}')]],
        phone2 : ['',[Validators.pattern('[0-9]{1,10}')]]
      }),
      id: ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z]{1,5}[0-9]{1,5}')])]
  })
  get name(){
      return this.info.get('name');
  }
  get phone1(){
    return this.info.get('phone.phone1');
}
get phone2(){
  return this.info.get('phone.phone2');
}
get id(){
  return this.info.get('id');
}
  onSubmit(){
    console.log(this.info.value);
  }
  
  ngOnInit(): void {
  }

}
