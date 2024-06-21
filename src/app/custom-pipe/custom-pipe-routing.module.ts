import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesNumbersPageComponent } from "./pages/phones-numbers-page/phones-numbers-page.component";

const routes: Routes = [
  {path: '', component: PhonesNumbersPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipeRoutingModule { }
