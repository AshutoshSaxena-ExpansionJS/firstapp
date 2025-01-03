import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLast',
  standalone: false
})
export class CapitalizeFirstLastPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    if (value.length === 1) return value.toUpperCase();
    return value.charAt(0).toUpperCase() + value.slice(1, -1) + value.charAt(value.length - 1).toUpperCase();
  }

}
