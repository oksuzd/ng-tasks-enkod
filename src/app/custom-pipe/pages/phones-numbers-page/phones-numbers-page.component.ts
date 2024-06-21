import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-phones-numbers-page',
  templateUrl: './phones-numbers-page.component.html',
  styleUrls: ['./phones-numbers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhonesNumbersPageComponent {
  phonesForm = new FormGroup({
    testValue: new FormControl('+78005557778',
      [Validators.required,
        Validators.pattern(/^\+7\d{10}$/)]),
  });
}
