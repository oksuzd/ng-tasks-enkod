import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from "./todo-list-routing.module";
import { InputTextModule } from "primeng/inputtext";
import { Button, ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    InputTextModule,
    Button,
    ButtonDirective,
    Ripple,
    DropdownModule,
    FormsModule,
    CheckboxModule
  ]
})
export class TodoListModule { }
