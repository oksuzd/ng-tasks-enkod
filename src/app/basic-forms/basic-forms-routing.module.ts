import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationComponent } from "./pages/user-creation/user-creation.component";


const routes: Routes = [
  {path: '', component: UserCreationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicFormsRoutingModule { }
