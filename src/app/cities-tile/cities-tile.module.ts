import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesTileRoutingModule } from './cities-tile-routing.module';
import { CitiesTileComponent } from './cities-tile.component';


@NgModule({
  declarations: [
    CitiesTileComponent
  ],
  imports: [
    CommonModule,
    CitiesTileRoutingModule
  ]
})
export class CitiesTileModule { }
