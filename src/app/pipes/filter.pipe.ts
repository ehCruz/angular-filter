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
    let filteredArray = []
    this._iterateOverObjects(value, value, searchString.toLowerCase(), filteredArray);
    return filteredArray;
  }

  private _iterateOverObjects(objPesquisa: any, objRetorno: any, searchTerm: string, filteredArray: Array<any>) {
    for (let key of Object.keys(objPesquisa)) {
      if (Array.isArray(objPesquisa[key])) {
        objPesquisa[key].forEach(el => this._iterateOverObjects(el, objRetorno, searchTerm, filteredArray));
      } else {
        if (objPesquisa[key] !== null && typeof objPesquisa[key] !== "undefined" && typeof objPesquisa[key] === "object") {
          this._iterateOverObjects(objPesquisa[key], objRetorno[key] || objRetorno, searchTerm, filteredArray);
        } else {
          if (objPesquisa[key] !== null && typeof objPesquisa[key] !== "undefined" && objPesquisa[key].toString().toLowerCase().includes(searchTerm)) {
            // console.log('pesquisa ', objPesquisa)
            // console.log('retorno ', objRetorno)
            this._validateForDuplicate(filteredArray, objRetorno);
            return
          }
        }
      }
    }
  }

  private _validateForDuplicate(filteredArray: Array<any>, object: any) {
    !filteredArray.find(el => el === object) ? filteredArray.push(object) : '';
  }
}
