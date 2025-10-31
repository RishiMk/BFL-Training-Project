import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
  standalone: true
})
export class ChunkPipe implements PipeTransform {
  transform<T>(array: T[], size: number): T[][] {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(array.slice(i, i + size));
      return acc;
    }, [] as T[][]);
  }
}
