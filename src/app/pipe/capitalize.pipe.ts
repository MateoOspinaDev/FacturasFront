import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(key: string): string {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }

}
