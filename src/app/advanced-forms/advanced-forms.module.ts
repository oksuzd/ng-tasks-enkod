import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedFormsRoutingModule } from './advanced-forms-routing.module';
import { AdvancedFormsPageComponent } from './pages/advanced-forms-page/advanced-forms-page.component';
import { KeyValueControlComponent } from './components/key-value-control/key-value-control.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiButtonModule, TuiErrorModule, TuiRootModule } from "@taiga-ui/core";
import { TuiFieldErrorPipeModule, TuiInputModule } from "@taiga-ui/kit";

const tuiModules = [
  TuiRootModule,
  TuiInputModule,
  TuiErrorModule,
  TuiFieldErrorPipeModule,
  TuiButtonModule,
]

@NgModule({
  declarations: [
    AdvancedFormsPageComponent,
    KeyValueControlComponent
  ],
  imports: [
    CommonModule,
    AdvancedFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [...tuiModules],
  ]
})
export class AdvancedFormsModule { }
