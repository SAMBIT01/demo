import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'silicon'
})
export class SiliconPipe implements PipeTransform {

  transform(value: string, name:string): string {
    return 'The candidate name:'+name;
  }

}
