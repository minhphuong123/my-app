// import { TodoService } from './todo.service';
// import { Component, OnInit } from '@angular/core';
// import { Todo } from './todo';
// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {

//   todos: Todo[] = [];
//   newTodo:Todo = new Todo[];

//   constructor(private todoService:TodoService) { }


//   getAll(){
//     this.todos=this.todoService.getAll();
//   }
//   ngOnInit(): void {
//     return this.getAll();
//   }

//   createTodo(){
//     this.todoService.createTodo(this.newTodo);
//     this.newTodo = new Todo();
//     this.getAll();
//   }
//   done(todo){
//     this.todoService.done(todo);
//     this.getAll();
//   }
//   delete(todo){
//     this.todoService.deleteTodo(todo.id);
//     this.getAll();
//   }
// }
