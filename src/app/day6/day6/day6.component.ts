import { day6 } from './../servicess/day6.model';
import { ServicessService } from './../servicess/servicess.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {

  datas:day6[];
  constructor(private day6Service:ServicessService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.day6Service.getAll().subscribe((res:any)=>{
      this.datas = res;
    },error=>{
      console.log(error);
    })
  }

}
