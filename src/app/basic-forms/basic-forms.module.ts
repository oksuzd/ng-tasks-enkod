import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BasicFormsRoutingModule } from './basic-forms-routing.module';
import { UserCreationComponent } from './pages/user-creation/user-creation.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';

import {
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiRadioBlockModule,
  TuiSelectModule
} from "@taiga-ui/kit";
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiErrorModule,
  TuiGroupModule,
  TuiRootModule,
} from "@taiga-ui/core";
import { TuiButtonCloseModule, TuiIconModule } from "@taiga-ui/experimental";



const tuiModules = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
  TuiInputModule,
  TuiDataListModule,
  TuiSelectModule,
  TuiGroupModule,
  TuiDataListWrapperModule,
  TuiErrorModule,
  TuiFieldErrorPipeModule,
  TuiRadioBlockModule,
  TuiButtonCloseModule,
  TuiIconModule,
];

@NgModule({
  declarations: [
    UserCreationComponent,
    SkillItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BasicFormsRoutingModule,
    [...tuiModules],
  ]
})
export class BasicFormsModule {}
