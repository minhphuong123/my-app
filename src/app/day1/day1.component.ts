import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
 
  tab:string="Home";
  change(tabCurrent:string):void{
    this.tab = tabCurrent;
  }
  isCheck:boolean = false;
  name:string = "Ha Minh Phuong";
  SoLuongBan = 0;
  languages:string[] = ["C","C++","C#","typescript"];
  HangHoa={
    Name: "Táo",
    Address:"Cẩm Văn Cẩm Giang Hải Dương",
    NSX: "CTY TNHH Minh Phương",
    SoLuongTon: 20
  }
  onKeyUp($event):void{
    if($event.which == 13)
    {
      $(document).ready(() => {
        $("#result-tag").append('<span class="btn btn-primary">'+$event.target.value+'</span>')
       });
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
