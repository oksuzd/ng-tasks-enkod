import { Component, OnInit } from '@angular/core';
import { Todo, TodoFilter } from "./models/todo.model";



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [
    {id: 1, name: 'Заметка номер 1', status: false},
    {id: 2, name: 'Заметка номер 2', status: false},
    {id: 3, name: 'Заметка номер 3', status: false},
  ]

  filters: TodoFilter[] | undefined;

  selectedFilter: TodoFilter | undefined;

  ngOnInit() {
    this.filters = [
      {name: 'Все заметки'},
      {name: 'Выполненные'},
      {name: 'Невыполненные'},
    ];
  }

  createTodo() {
  }

}
