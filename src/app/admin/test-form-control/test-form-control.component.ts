import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form-control',
  templateUrl: './test-form-control.component.html',
  styleUrls: ['./test-form-control.component.css']
})
export class TestFormControlComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
