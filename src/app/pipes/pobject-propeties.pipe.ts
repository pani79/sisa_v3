import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pObjectPropeties'
})

export class PObjectPropetiesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(function(key){
      let pair = {};
      let k = 'key';
      let v = 'value';
      pair[k] = key;
      pair[v] = value[key];
      // return pair;
      return pair;
    });
  }

/* 
  transform(value: any, ...args): any {
    let newstring = value;
    if (args[0]) { // i want a full stop
      newstring += "."
    }
    if (args[1] === "singlequote") {
      newstring = "'" + newstring
    } else if ( args[1] === "doublequote") {
      newstring = "" + newstring
    }
    console.log(value, args);
    return newstring;
  }
 */
}
