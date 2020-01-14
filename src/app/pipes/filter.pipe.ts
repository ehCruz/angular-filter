import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchString: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchString) {
      return value;
    }
    return this.iterateOverObjects(value, searchString);
  }

  iterateOverObjects(arr, searchString: string): any[] {
    const pattern = searchString.toLowerCase();
    return arr.filter(el => {

      for (var [key, value] of Object.entries(el)) {
        
          if (value && typeof value == "object") {
            this.iterateOverObjects(value, pattern);
          } else {
            if (value.toString().toLowerCase().includes(pattern)) {
              return value;
            }
          }
        
      }

    });
  }

}
