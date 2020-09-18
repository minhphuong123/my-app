import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-template',
  templateUrl: './setting-template.component.html',
  styleUrls: ['./setting-template.component.css']
})
export class SettingTemplateComponent implements OnInit {
  textDemo:string = "Angular 8";

  constructor() { }

  ngOnInit(): void {
  }
  optionCurrent:string = "";
  BackgroundColor:string = "";
  TextColor:string = "";
  changeOption($event){
    this.optionCurrent = $event.target.value;
    console.log(this.optionCurrent);
  }
  changeBackgroundColor($event){
    this.BackgroundColor = $event.target.value;
    console.log(this.BackgroundColor);
  }
  changeTextColor($event){
    this.TextColor = $event.target.value;
    console.log(this.TextColor);
  }
  setStyle(){
    const abc={
      'background-color':this.BackgroundColor,
      'color':this.TextColor

    }
    return abc;
  }

}
