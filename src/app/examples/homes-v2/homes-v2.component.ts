import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location/* , LocationStrategy, PathLocationStrategy */ } from '@angular/common';

// Servicios
import { SisaInfoService } from 'src/app/services/sisa-info.service';

@Component({
  selector: 'app-homes-v2',
  templateUrl: './homes-v2.component.html',
  styleUrls: ['./homes-v2.component.css']
})
export class HomesV2Component implements OnInit {

  _locacion: string;
  _registro: string;
  _infoHome = {};

  _infoPaginacabecera: string[] = [
    'es una produccion del',
    'Amo y se;or',
    'bg-dark',
    'askeletor',
    'Default.',
    'temp_usu',
    'volverAtras'
  ];

  constructor(
    private _rutaActivada: ActivatedRoute,
    private _localizacion: Location,
    private _infoService: SisaInfoService,
    private _ruter: Router
  ) {
/*     _ruter.events.subscribe(val => {
      let dondeEstoy = _localizacion.path();
      if (dondeEstoy !== '') {
        this._ruta = dondeEstoy;
        console.log('ruta es = ' + dondeEstoy);
      }
    }); */
  }

  ngOnInit() {
    this.configura();
  }

  configura() {
    this._locacion = this.obtieneRuta();
    const infoObtenida = this._infoService.obtieneInfo('homes2', this._locacion);
    this._infoHome['cabecera'] = {};
    this._infoHome['cabecera']['registro'] = this._infoService.obtieneRegistro(this._locacion);
    this._infoHome['cabecera']['info'] = this._infoService.obtieneRegistroHomex(this._locacion);
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
  }

  obtieneRuta(): any {
    const id = this._rutaActivada.snapshot.paramMap.get('id');
    /* console.log('ruta es xxxxxxxx= ' + id); */
    return id;
  }

}
