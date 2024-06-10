import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesTileComponent } from "./cities-tile.component";


const routes: Routes = [
  {path: '', component: CitiesTileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesTileRoutingModule { }
