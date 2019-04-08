import { Injectable } from '@angular/core';

// Data
import { PaginasInfo } from '../data/paginasInfo';

@Injectable({
  providedIn: 'root'
})
export class SisaInfoService {

  laCajaDePandora = PaginasInfo;

  constructor() { }

  obtieneInfo(tipo: string, valor: any): any[] {
    /* console.log('SisaInfoService'); */
    console.log('-------------------------- ');
    var respuesta = [null, null, null];


    switch (tipo) {
      case 'homes':
        respuesta[0] = this.obtieneRegistro(valor);
        respuesta[1] = this.obtieneRegistroHome(valor);
        respuesta[2] = 'homeX';
        break;
      default:
        break;
    }
    /* console.log('(obtieneInfo) respuesta R => ' + respuesta[0]);
    console.log('(obtieneInfo) respuesta H => ' + respuesta[1]); */
    return respuesta;
  }

  obtieneRegistro(registro: string): object {
    /* 
      console.log('0=> ' + registro);
      console.log('1=> ' + PaginasInfo.registros[registro]);
      console.log('2=> ' + PaginasInfo['registros'][registro]);
      console.log('1=> ' + PaginasInfo.registros[registro]['id']);
     */
    let registroDatos =  PaginasInfo.registros[registro];
    /* console.log('registroDatos ts - - - - - - - - 0=> ' + (<Object>registroDatos).toString()); */
    return registroDatos;
  }
  
  obtieneRegistroHome(registro: string): object {
  
      /* console.log('obtieneRegistroHome 0=> ' + registro);
      console.log('obtieneRegistroHome 1=> ' + PaginasInfo.homes[registro]); */
      let homeDatos =  PaginasInfo.homes[registro];

      /* console.log('obtieneRegistroHome 3=> ' + homeDatos); */
      return homeDatos;
    }

}
