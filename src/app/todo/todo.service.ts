import { Todo } from './todo';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  lastId:number = 0;
  getAll(){
    this.todos;
  }
  getId()
  {
    let todo = this.
  }
  createTodo(todo:Todo):TodoService
  {
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    console.log(todo);
    return this;
  }
  done(todo:Todo):TodoService{
    
  }
  constructor() { }
}
