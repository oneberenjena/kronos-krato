import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyrating'
})
export class SortbyratingPipe implements PipeTransform {

  transform(list: any[], input: string, ascending: boolean) {
    if (ascending == true){
      list.sort((a: any, b: any) => {
        if (a.rating < b.rating) {
          return -1;
        } else if (a.rating > b.rating) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      list.sort((a: any, b: any) => {
        if (a.rating < b.rating) {
          return 1;
        } else if (a.rating > b.rating) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    if (input) {
      input = input.toLowerCase();
      return list.filter(function (el: any) {
        return el.sector.toLowerCase().indexOf(input) > -1;
      })
    }
    return list;
  }
}


