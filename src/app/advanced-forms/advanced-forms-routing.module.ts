import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsPageComponent } from "./pages/advanced-forms-page/advanced-forms-page.component";

const routes: Routes = [
  {path: '', component: AdvancedFormsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedFormsRoutingModule { }
