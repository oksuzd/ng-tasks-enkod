import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodosRoutingModule } from "./todos-routing.module";
import { InputTextModule } from "primeng/inputtext";
import { Button, ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosFiltersComponent } from './components/todos-filters/todos-filters.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

const primeNgModules = [
  InputTextModule,
  Button,
  ButtonDirective,
  Ripple,
  DropdownModule,
  FormsModule,
  CheckboxModule
]

@NgModule({
  declarations: [
    TodosPageComponent,
    TodoItemComponent,
    TodosFiltersComponent,
    TodosListComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    [...primeNgModules]
  ]
})
export class TodosModule { }
