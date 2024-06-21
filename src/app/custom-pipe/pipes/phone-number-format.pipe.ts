import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormat'
})
export class PhoneNumberFormatPipe implements PipeTransform {

  transform(value: string, format: string): string {
    if (!value) return value;

    let cleaned = ('' + value).replace(/\D/g, '');

    let match;
    if (format === '(###) ###-##-##') {
      match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
      if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
      }
    } else if (format === '###-###-##-##') {
      match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
      if (match) {
        return `+${match[1]} ${match[2]}-${match[3]}-${match[4]}-${match[5]}`;
      }
    }

    return value;
  }
}
