import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Todo } from "../../models/todo.model";
import { initialFilters, TodoFilter, VISIBILITY_FILTER } from "../../models/filter.model";
import { TodosQuery } from "../../state/todos.query";
import { TodosService } from "../../state/todos.service";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy({checkProperties: true})
@Component({
  selector: 'app-todo-list',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  addInput = '';
  todos$!: Observable<Todo[] | null>;
  activeFilter: VISIBILITY_FILTER = VISIBILITY_FILTER.SHOW_ALL;
  filters: TodoFilter[] = initialFilters;

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.createSubscription();
  }

  createSubscription() {
    this.todosQuery.selectVisibilityFilter$
      .pipe(untilDestroyed(this))
      .subscribe(val => this.activeFilter = val);
  }


  add() {
    this.todosService.add(this.addInput);
    this.addInput = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: string) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }
}
