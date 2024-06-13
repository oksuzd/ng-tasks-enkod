import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TabMenuModule } from "primeng/tabmenu";


@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    TabMenuModule,
  ]
})
export class CoreModule {}
