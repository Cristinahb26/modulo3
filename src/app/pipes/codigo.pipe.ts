import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigo'
})
export class CodigoPipe implements PipeTransform {

  transform(id_book: number): string {

    let codigo = id_book.toString().padStart(2, "0");
    return `Ref- ${codigo}`;
  }

}
