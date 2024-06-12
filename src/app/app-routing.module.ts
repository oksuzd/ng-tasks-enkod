import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./core/pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'todo-list', pathMatch: 'full'},
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
