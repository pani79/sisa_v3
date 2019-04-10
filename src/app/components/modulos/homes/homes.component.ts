import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location/* , LocationStrategy, PathLocationStrategy */ } from '@angular/common';

// Servicios
import { SisaInfoService} from '../../../services/sisa-info.service';

// Servicios
/* import {} from '../../../services/'; */

@Component({
  selector: 's-modulos-homes',  
  /* providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}], */
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  _registro: string;
  _infoHome = [];
  _panelesInfo: any[];
  /*
      modelo - - - - - - - - - - - - - - 
      s: titulo
      s: subtitulo
      s[]: texto intro
      b[]:configuracion visual de herramientas que muestra
          0   buscador
          1   paneles numerales
          2   BOTONERA LATERAL
          3   NOTICIAS
  */
 /* 
  panelesInfo: any[] = [
    ['icon-bot_ico_ayudaenlinea', '_homes_acercade.png', '#3314cc', 'Acerca de', ''],
    ['icon-bot_ico_cmdb_documentos', '_homes_biblioteca.png', '#cc4a14', 'Documentación', 'Info loca de Lorem ipsum'],
    ['icon-mod_autoridadesyreferentes', '_homes_referentes.png', '#3366ff', 'Autoridades y Referentes', 'Lorem'],
    ['icon-reg_refes', '_homes_establecimientos.png', '#3e699c', 'Red de establecimientos', 'dasd asd asd asd  asda sdasdasd asd a'],
    ['icon-bot_ico_soporte_preguntasfrecuentes', '_homes_preguntasFrecuentes.png', '#ff9900', 'Preguntas frecuentes', '']
  ];
 */

  _infoPaginacabecera: string[] = [
    'es una produccion del',
    'Amo y se;or',
    'bg-dark',
    'askeletor',
    'Default.',
    'temp_usu',
    'volverAtras'
  ];

  botones = {
    buscar: ['boton_general', 'bot_ico_buscar', 'Buscar']
  };

  codigoInfoBotonera: number;
  competitionId: string;
  ruta: string;
 /*  location: Location; */

  constructor(
    // private _ruta: Router,
    // private _rutaAct: ActivatedRoute,
    private _ruta: ActivatedRoute,
    private _localizacion: Location,
    private _infoService: SisaInfoService,
    private ruter: Router
  ) {
    ruter.events.subscribe(val => {
        /* console.log('ruta escritorio = ' + _localizacion.path()); */
      if (_localizacion.path() !== '') {
        this.ruta = _localizacion.path();
        console.log('ruta es = ' + _localizacion.path());
        this.configura();
      }/* else { this.ruta = 'home';  console.log('ruta es = home');  } */
    });

    /* this.location = _localizacion;
    console.log('constructor escritorio = ' + this.location);  */
    /* _localizacion.subscribe(val => console.log(val)); */
    /* console.log('constructor escritorio = ' + this._infoHome['registro']); */
      /* 
        this._ruta.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
        };
      */
   }

  ngOnInit() {
    console.log('iniciando escritorio = ' + this._infoHome['registro']);
    this.codigoInfoBotonera = 22;
      /* 
          this._ruta.paramMap.subscribe((params: ParamMap) => {
            this.competitionId = params.get('competitionId ');
            let condition = params.get('condition ');
            //business logic what changes you want on the page with this new data.
          });
       */
   /*  this.configura(); */

    /* Temp */

    /* 
     this.codigoInfoBotonera = [
          'Se realizó el 8 de agosto en la capital de la provincia, participaron 20 referentes del registro de diferentes localidades. ',
        'Este segundo aumento consecutivo (ahora de 100 puntos básicos) tomó por sorpresa al mercado porque llega tras el alza de 150 puntos dispuesta por el Central en la anterior reunión quincenal del comité de política monetaria, cuando se declaró sorprendido por la magnitud de la suba en los combustibles tras las elecciones.',
        'Se trata del mayor nivel de los últimos 15 meses e intenta estimular el ahorro y una postergación de consumos que ayude a contener alzas en el resto de los precios de la economía.',
        0,
        null
      ]; 
    */
  }

  configura() {
    this._registro = this.obtieneRuta();

    this._infoHome['registro'] = this._registro;
    const infoObtenida = this._infoService.obtieneInfo('homes', this._registro);
    /*  console.log('infoObtenida es: ' + infoObtenida); */
    this._infoHome = this._infoService.obtieneInfo('homes', this._registro);
    this._infoPaginacabecera[0] = this._infoHome[1]['subtitulo'];
    this._infoPaginacabecera[1] = this._infoHome[1]['titulo'];
    this._infoPaginacabecera[2] = this._infoHome[0]['claseColor'];
    this._infoPaginacabecera[3] = this._infoHome[0]['claseIcono'];
    this._infoPaginacabecera[4] = this._infoHome[1]['textoIntro'];
    console.log('holis 2 - : ' + this._infoHome[2]);
  }

  obtieneRuta(): any {
    // const id = +this._ruta.snapshot.paramMap.get('id');
    const id = this._ruta.snapshot.paramMap.get('id');
    return id;
  }

}
