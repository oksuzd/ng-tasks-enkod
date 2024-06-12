import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Observable, Subject, take, takeUntil, throwError } from "rxjs";
import { Todo } from "../../models/todo.model";
import { initialFilters, TodoFilter, VISIBILITY_FILTER } from "../../models/filter.model";
import { TodosQuery } from "../../state/todos.query";
import { TodosService } from "../../state/todos.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit, OnDestroy {

  addInput = '';
  todos$!: Observable<Todo[] | null>;
  activeFilter: VISIBILITY_FILTER = VISIBILITY_FILTER.SHOW_ALL;
  filters: TodoFilter[] = initialFilters;
  private notifier$: Subject<null> = new Subject();

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.createSubscription();
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  createSubscription() {
    this.todosQuery.selectVisibilityFilter$
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
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
