import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByOrder'
})

export class SortByOrderPipe implements PipeTransform {

  transform(items: any[], arg: string): any {
    
    if (!items || !arg){
      return items;
    }
    let sortedArray: any;

    if (arg === 'asc'){
      sortedArray = items.sort(function(a, b){
        return a.order - b.order;
      })
    }

    if( arg === 'des'){
      sortedArray = items.sort(function(a, b){
        return b.order - a.order;
      })
    }

    return items;
  }

}
