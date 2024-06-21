import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingPageComponent } from "./pages/searching-page/searching-page.component";


const routes: Routes = [
  {path: '', component: SearchingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectiveRoutingModule { }
