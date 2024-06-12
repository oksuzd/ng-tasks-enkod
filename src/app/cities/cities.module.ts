import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CitiesTileComponent } from './components/cities-tile/cities-tile.component';
import { CreateCityComponent } from './pages/create-city/create-city.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CityCardComponent } from './components/city-card/city-card.component';


@NgModule({
  declarations: [
    CitiesListComponent,
    CitiesTileComponent,
    CreateCityComponent,
    CitiesPageComponent,
    ToolBarComponent,
    CityCardComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule { }
