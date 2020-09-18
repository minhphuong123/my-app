import { category } from './category';
import { list } from './list-category';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getAll(){
    return list;
  }
  constructor() { }
}
