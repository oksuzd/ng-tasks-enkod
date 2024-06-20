import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-key-value-control',
  templateUrl: './key-value-control.component.html',
  styleUrls: ['./key-value-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyValueControlComponent),
      multi: true
    }
  ]
})
export class KeyValueControlComponent implements ControlValueAccessor {
  key: string = '';
  value: string = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(obj: any): void {
    if (obj) {
      this.key = obj.key || '';
      this.value = obj.value || '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onKeyChange(newKey: string): void {
    this.key = newKey;
    this.onChange({ key: this.key, value: this.value });
    this.onTouch();
  }

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.onChange({ key: this.key, value: this.value });
    this.onTouch();
  }
}
