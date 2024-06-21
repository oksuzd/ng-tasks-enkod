import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { SearchingPageComponent } from './pages/searching-page/searching-page.component';
import { HighlightWordDirective } from "./directives/highlight-word.directive";

import {
  TuiButtonModule, TuiHintModule,
  TuiRootModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { TuiInputModule } from "@taiga-ui/kit";
import { TuiButtonCloseModule, TuiIconModule } from "@taiga-ui/experimental";



const tuiModules = [
  TuiRootModule,
  TuiButtonModule,
  TuiInputModule,
  TuiButtonCloseModule,
  TuiIconModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  declarations: [
    SearchingPageComponent,
    HighlightWordDirective,
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [...tuiModules],
    TuiHintModule,
  ]
})
export class CustomDirectiveModule {}
