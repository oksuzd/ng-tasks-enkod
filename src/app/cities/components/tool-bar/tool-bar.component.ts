import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { City } from "../../models/city.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolBarComponent {
  @Output() public newCity = new EventEmitter<City>();

  constructor(
    private router: Router,
  ) {}

  navigate(view: string) {
    this.router.navigate([view]).then(() => {
    });
  }
}
