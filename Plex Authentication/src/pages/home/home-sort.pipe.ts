import { PipeTransform, Pipe } from "@angular/core";
import { IHome } from './home';

@Pipe({
  name: "sortHome"
})
export class HomeSortPipe implements PipeTransform {
  
  transform(array: IHome[], isDesc: boolean): IHome[] {
    array.sort((a, b) => {
      if(isDesc){
        if (a.popularity > b.popularity) {
          return -1;
        } else if (a.popularity < b.popularity) {
          return 1;
        } else {
          return 0;
        }
      }
      else{
        if (a.popularity < b.popularity) {
          return -1;
        } else if (a.popularity > b.popularity) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return array;
  }

}