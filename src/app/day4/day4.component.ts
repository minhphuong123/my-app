import { category } from './category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  categories:category[];
  date = new Date();
  constructor(private categoriService:CategoryService) { }
  getCateFromService():void{
    this.categories = this.categoriService.getAll();
  }
  ngOnInit(): void {
    this.getCateFromService();
  }
  

}
