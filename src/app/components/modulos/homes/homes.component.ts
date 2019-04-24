import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location/* , LocationStrategy, PathLocationStrategy */ } from '@angular/common';

// Servicios
import { SisaInfoService } from 'src/app/services/sisa-info.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent  implements OnInit {

  _locacion: string;
  _registro: string;
  _infoHome = {};

  _infoPaginacabecera: string[] = [];
  ruta: string;

  constructor(
    private _rutaActivada: ActivatedRoute,
    private _localizacion: Location,
    private _infoService: SisaInfoService,
    private _ruter: Router
  ) {
    
    _ruter.events.subscribe(val => {
      /* console.log('ruta escritorio = ' + _localizacion.path()); */
      if (_localizacion.path() !== '') {
        this.ruta = _localizacion.path();
        console.log('ruta es = ' + _localizacion.path());
        this.configura();
      }/* else { this.ruta = 'home';  console.log('ruta es = home');  } */
    });
  }

  ngOnInit() {
    this.configura();
  }

  configura() {
    this._locacion = this.obtieneRuta();
    let infoObtenida = this._infoService.obtieneInfo('homes', this._locacion);
    this._infoHome['cabecera'] = {};
    this._infoHome['cabecera']['registro'] = infoObtenida[0];
    this._infoHome['cabecera']['info'] = infoObtenida[1];
    this._infoHome['componentesHome'] = infoObtenida[2];
    /*
      this._infoHome['registro'] = this._registro;
      
      const infoObtenida = this._infoService.obtieneInfo('homes2', this._registro);
      this._infoHome = this._infoService.obtieneInfo('homes', this._registro);
      this._infoPaginacabecera[0] = this._infoHome[1]['subtitulo'];
      this._infoPaginacabecera[1] = this._infoHome[1]['titulo'];
      this._infoPaginacabecera[2] = this._infoHome[0]['claseColor'];
      this._infoPaginacabecera[3] = this._infoHome[0]['claseIcono'];
      this._infoPaginacabecera[4] = this._infoHome[1]['textoIntro'];
      this._panelesInfo = this._infoHome[1]['componentesInfo'][4];
    */
    this._infoPaginacabecera[0] = this._infoHome['cabecera']['info']['subtitulo'];
    this._infoPaginacabecera[1] = this._infoHome['cabecera']['info']['titulo'];
    this._infoPaginacabecera[4] = this._infoHome['cabecera']['info']['textoIntro'];
    this._infoPaginacabecera[2] = this._infoHome['cabecera']['registro']['claseColor'];
    this._infoPaginacabecera[3] = this._infoHome['cabecera']['registro']['claseIcono'];
    /*
    this._infoPaginacabecera[5] = this._infoHome['cabecera']['info'][''];
    this._infoPaginacabecera[6] = this._infoHome['cabecera']['info'][''];
    this._infoPaginacabecera[0] = this._infoHome['cabecera']['info'][''];
    this._infoPaginacabecera[0] = this._infoHome['cabecera']['info'][''];
    this._infoPaginacabecera[0] = this._infoHome['cabecera']['info'][''];
     */
    /* 
          0 'es una produccion del',
          1 'Amo y se;or',
          2 'bg-dark',
          3 'askeletor',
          4 'Default.',
          5 'temp_usu',
          6 'volverAtras'
     */    
  }

  obtieneRuta(): any {
    const id = this._rutaActivada.snapshot.paramMap.get('id');
    /* console.log('ruta es xxxxxxxx= ' + id); */
    return id;
  }

}
