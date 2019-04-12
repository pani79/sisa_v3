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
    let respuesta = [null, null, null];


    switch (tipo) {
      case 'homes':
        respuesta[0] = this.obtieneRegistro(valor);
        respuesta[1] = this.obtieneRegistroHome(valor);
        console.log('-----------x-x--------------' + respuesta[1]['componentesInfo'][4]);
        /* respuesta[2] = this.obtienePanelesDeImagenes(respuesta[1]['componentesInfo']); */
        /* respuesta[2] = this.obtienePanelesDeImagenes(['1', '2']); */
        /* this.obtienePanelesDeImagenes(['1', '2']); */
        /*
          respuesta[2] =  (): any[] => {
            let paneles: any[] = ['paneles' + respuesta[2]['componentesInfo']];
            return paneles;
          };
         */
        /*
          respuesta[2] = (respuesta[2]['componentesInfo']) => {
            let paneles: any[] = ['paneles' + respuesta[2]['componentesInfo']];
            return paneles;
          };
        */
        break;
      default:
        break;
    }
    /* console.log('(obtieneInfo) respuesta R => ' + respuesta[0]);
    console.log('(obtieneInfo) respuesta H => ' + respuesta[1]); */
        console.log('-----------x-x--x------------' + respuesta[1][4]);
    return respuesta;
  }

  obtieneRegistro(registro: string): object {
    let registroDatos =  PaginasInfo.registros[registro];
    return registroDatos;
    /*
        console.log('0=> ' + registro);
        console.log('1=> ' + PaginasInfo.registros[registro]);
        console.log('2=> ' + PaginasInfo['registros'][registro]);
        console.log('1=> ' + PaginasInfo.registros[registro]['id']);
     */
    /* console.log('registroDatos ts - - - - - - - - 0=> ' + (<Object>registroDatos).toString()); */
  }

  obtieneRegistroHome(registro: string): object {
      let homeDatos =  PaginasInfo.homes[registro];
      return homeDatos;
      /* console.log('obtieneRegistroHome 0=> ' + registro);
      console.log('obtieneRegistroHome 1=> ' + PaginasInfo.homes[registro]); */
      /* console.log('obtieneRegistroHome 3=> ' + homeDatos); */
    }

  obtienePanelesDeImagenes(ids: string[]): any[] {
    let panelesDeImagenes: any[] = [];
    ids.forEach(element => {
      panelesDeImagenes.push(PaginasInfo.panelesDeImagenes[element]);
    });
    return panelesDeImagenes;
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
