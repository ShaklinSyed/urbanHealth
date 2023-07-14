import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if (!value || !searchText){
      return value;
    }

    let returnArray = value.filter((ele: any) => {
      searchText = searchText.toLowerCase();
      let title = ele.data.title.toLowerCase();

      if (title.includes(searchText)){
        return true;
      } else {
        return false
      }
    });

    return returnArray;

  }

}
