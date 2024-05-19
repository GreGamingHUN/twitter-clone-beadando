import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datum',

})
export class DatumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let date = new Date(value as number).toLocaleDateString();
    let time = new Date(value as number).toLocaleTimeString();
    return `${date} ${time}`;
  }

}
