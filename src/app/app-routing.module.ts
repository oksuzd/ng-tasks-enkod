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
  {
    path: 'basic-forms',
    loadChildren: () => import('./basic-forms/basic-forms.module').then(m => m.BasicFormsModule)
  },
  {
    path: 'advanced-forms',
    loadChildren: () => import('./advanced-forms/advanced-forms.module').then(m => m.AdvancedFormsModule)
  },
  {
    path: 'custom-directive',
    loadChildren: () => import('./custom-directive/custom-directive.module').then(m => m.CustomDirectiveModule)
  },
  {
    path: 'custom-pipe',
    loadChildren: () => import('./custom-pipe/custom-pipe.module').then(m => m.CustomPipeModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
