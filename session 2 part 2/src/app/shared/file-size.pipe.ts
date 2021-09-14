import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    let type = args[0];
    console.log(type);

    if (type === 'GB')
      return (value / 1024 / 1024 / 1024).toFixed(2) + ' ' + type;
    if (type === 'MB')
      return (value / 1024 / 1024).toFixed(2) + ' ' + type;
    if (type === 'KB')
      return (value / 1024).toFixed(2) + ' ' + type;

    return null;
  }

}
