import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { Button, ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";


const primeNgModules = [
  Button,
  ButtonDirective,
]

@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    [...primeNgModules],
    Ripple
  ],
  exports: [
    BackButtonComponent
  ],
})
export class SharedModule { }
