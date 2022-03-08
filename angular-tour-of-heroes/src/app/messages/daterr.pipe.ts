
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dater'
})
export class DaterrPipe implements PipeTransform {
  transform(row: any, f1: Date, f2: Date): any {
    f1.toString().length == 0 ? f1 = new Date("1995-12-25T11:30:00.000Z") : f1;
    f2 == null ? f2 = new Date() :f2; 
    if (f1 >= f2 || f1 == null) { return row;}
    return row.filter((x: { fecha: string | number | Date; })=>{return new Date(x.fecha) >= new Date(f1) && new Date(x.fecha) <= new Date(f2)});   
  }
}