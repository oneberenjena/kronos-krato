import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  transform(value: any, input: string, searchList: any) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        var isTrue = false;
        for (var k in searchList) {
          if (el[searchList[k]].toLowerCase().indexOf(input) > -1) {
            isTrue = true;
          }
          if (isTrue) {
            return el
          }
        }
      })
    }
    return value;
  }
}
