import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesListComponent } from "./components/cities-list/cities-list.component";
import { CitiesTileComponent } from "./components/cities-tile/cities-tile.component";
import { CitiesPageComponent } from "./pages/cities-page/cities-page.component";
import { CityEditorComponent } from "./pages/city-editor/city-editor.component";


const routes: Routes = [
  {
    path: '',
    component: CitiesPageComponent,
    children: [
      { path: 'list', component: CitiesListComponent },
      { path: 'tile', component: CitiesTileComponent },
      { path: 'create', component: CityEditorComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
