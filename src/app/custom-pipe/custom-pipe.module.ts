import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipeRoutingModule } from './custom-pipe-routing.module';
import { PhonesNumbersPageComponent } from './pages/phones-numbers-page/phones-numbers-page.component';
import { PhoneNumberFormatPipe } from './pipes/phone-number-format.pipe';
import { TuiButtonModule, TuiRootModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiInputModule } from "@taiga-ui/kit";
import { TuiButtonCloseModule, TuiIconModule } from "@taiga-ui/experimental";


const tuiModules = [
  TuiRootModule,
  TuiInputModule,
  TuiButtonCloseModule,
  TuiButtonModule,
  TuiButtonCloseModule,
  TuiIconModule,
  TuiTextfieldControllerModule,
]

@NgModule({
  declarations: [
    PhonesNumbersPageComponent,
    PhoneNumberFormatPipe
  ],
  imports: [
    CommonModule,
    CustomPipeRoutingModule,
    TuiRootModule,
    FormsModule,
    ReactiveFormsModule,
    [...tuiModules],
  ]
})
export class CustomPipeModule { }
