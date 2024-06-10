import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesListComponent } from './cities-list.component';
import { CitiesListRoutingModule } from "./cities-list-routing.module";



@NgModule({
  declarations: [
    CitiesListComponent
  ],
  imports: [
    CommonModule,
    CitiesListRoutingModule
  ]
})
export class CitiesListModule { }
