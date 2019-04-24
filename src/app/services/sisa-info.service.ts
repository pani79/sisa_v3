import { Injectable } from '@angular/core';

// Data
import { PaginasInfo } from '../data/paginasInfo';
import { BotoneraLateralInfo } from '../data/botoneraLateralInfo';

@Injectable({
  providedIn: 'root'
})
export class SisaInfoService {

  constructor() { }

  obtieneInfo(tipo: string, valor: any): any[] {
    /* console.log('SisaInfoService'); */
    console.log('-------------------------- ');
    let respuesta = [null, null, null];


    switch (tipo) {

      case 'homes':
          let info = this.obtieneRegistroHome(valor);
        respuesta[0] = this.obtieneRegistro(valor);
        respuesta[1] = info['cabecera'];
        respuesta[2] = info['componentes'];
        /* console.log('-----------x-x--------------' + respuesta[1]['componentesInfo'][4]);  */
        break;
      default:
        break;
    }
    /* console.log('(obtieneInfo) respuesta R => ' + respuesta[0]);
    console.log('(obtieneInfo) respuesta H => ' + respuesta[1]); */
        /* console.log('-----------x-x--x------------' + respuesta[1][4]); */
    return respuesta;
  }

  obtieneRegistro(registro: string): object {
    let registroDatos =  PaginasInfo.registros[registro];
    return registroDatos;
  }

  obtieneRegistroHome(registro: string): object {
    console.log('obtieneRegistroHome2  = = = = = =0=> ' + registro);
    let homeDatos =  PaginasInfo.homes[registro];
    return homeDatos;
    /* 
      console.log('obtieneRegistroHome 0=> ' + registro);
      console.log('obtieneRegistroHome 1=> ' + PaginasInfo.homes[registro]); 
      console.log('obtieneRegistroHome 3=> ' + homeDatos); 
    */
  }

  obtienePanelesDeImagenes(ids: string[]): any[] {
    let panelesDeImagenes: any[] = [];
    ids.forEach(element => {
      panelesDeImagenes.push(PaginasInfo.panelesDeImagenes[element]);
    });
    return panelesDeImagenes;
  }

  obtieneBotoneraLateral(id: string): any[] {
    let solapas: any[] = [];
    /* 
      ids.forEach(element => {
        panelesDeImagenes.push(PaginasInfo.panelesDeImagenes[element]);
      });
     */
    return solapas;
  }
/*
    obtienePanelesDeImagenes(id: string): any {
      return id;
    }

    obtienePanelesDeImagenes(id: string): any[] {
      let panelesDeImagenes: any[];
      panelesDeImagenes[0] =  PaginasInfo.panelesDeImagenes[id];
      return panelesDeImagenes;
    }
 */
}
