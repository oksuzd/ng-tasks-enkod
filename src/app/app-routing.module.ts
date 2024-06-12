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
    path: 'cities-list',
    loadChildren: () => import('./cities-list/cities-list.module').then(m => m.CitiesListModule)
  },
  {
    path: 'cities-tile',
    loadChildren: () => import('./cities-tile/cities-tile.module').then(m => m.CitiesTileModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
