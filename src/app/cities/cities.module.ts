import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CitiesTileComponent } from './components/cities-tile/cities-tile.component';
import { CityEditorComponent } from './pages/city-editor/city-editor.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { InputTextModule } from "primeng/inputtext";
import { Button, ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { SharedModule } from "../shared/shared.module";
import { InputTextareaModule } from "primeng/inputtextarea";


const primeNgModules = [
  InputTextModule,
  InputTextareaModule,
  Button,
  ButtonDirective,
  Ripple,
  ConfirmDialogModule,
]

@NgModule({
  declarations: [
    CitiesListComponent,
    CitiesTileComponent,
    CityEditorComponent,
    CitiesPageComponent,
    ToolBarComponent,
    CityCardComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    [...primeNgModules],
    SharedModule,
  ]
})
export class CitiesModule { }
