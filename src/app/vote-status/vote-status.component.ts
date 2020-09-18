import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-status',
  templateUrl: './vote-status.component.html',
  styleUrls: ['./vote-status.component.css']
})
export class VoteStatusComponent implements OnInit {
  title:string="Just me, myself and I, exploring the universe of unknowment but I have a heart of want to search my world with you";
  constructor() { }
  arrStatus=["Like","Tim","Thương thương","Buồn","Phẫn nộ"];
  check:boolean=false;
  changeStatus(vote){
    this.check = vote;
  }
  ngOnInit(): void {
  }
  status:string = "Like";
  change(item){
    this.status = item;
    this.check = false;
  }

}
