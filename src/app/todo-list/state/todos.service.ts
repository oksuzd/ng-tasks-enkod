import { TodosStore } from "./todos.store";
import { createTodo, Todo } from "../models/todo.model";
import { Injectable } from "@angular/core";
import { VISIBILITY_FILTER } from "../models/filter.model";


@Injectable({ providedIn: "root" })
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui: {
        filter
      }
    });
  }

  complete({ id, completed }: Todo) {
    this.todosStore.update(id, { completed });
  }

  add(title: string) {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  delete(id: string) {
    this.todosStore.remove(id);
  }
}
