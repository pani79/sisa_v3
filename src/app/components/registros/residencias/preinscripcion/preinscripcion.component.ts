import { Component, OnInit } from '@angular/core';
/* import { Subscription, Observable} from 'rxjs'; */

//  Modelos
import { ResidenciasPreinscripcionModel } from '../../../../models/residencias_preinscripcion';
import { ResidenciasResidenciasModel } from 'src/app/models/residencias_residencias';

import { Provincia } from 'src/app/models/provincia';
import { InstitucionFormadora } from 'src/app/models/institucionFormadora';
import { RefepsEspecialidades } from 'src/app/models/refepsEspecialidades';
import { Pais } from 'src/app/models/paises';

//  Servicios
import { GeoService } from 'src/app/services/tas/geo.service';
import { ResidenciasService } from 'src/app/services/registros/residencias.service';
import { RefepsService } from 'src/app/services/registros/refeps.service';

import { PreinscripcionServiceDebugService } from './preinscripcion-service-debug.service';


import { Ipreinscripcion_busqueda } from './ipreinscripcion_busqueda';
import { Ipreinscripcion_inscripcion } from './ipreinscripcion_inscripcion';
/* */

// Informacion falsa
/* import { PROVINCIAS } from '../../../../../assets/fakeData/tablas_auxiliares'; */

@Component({
  selector: 's-registros-residencias-preinscripcion',
  templateUrl: './preinscripcion.component.html',
  styleUrls: ['./preinscripcion.component.css']
})
export class PreinscripcionComponent implements OnInit {

  _preinscripcionModelo = new ResidenciasPreinscripcionModel (
    null,     // public _a_concursaId: number,
    null,    // public _a_concursaTipo: boolean,
    null,     // public _a_concursaProvincia: number,
    null,     // public _a_concursaInstitucion: number,
    null,     // public _a_concursaEspecialidad: number,
    
    null,     // public _b_concursotipo: number,
    null     // public _b_concursosubtipo: number
  );

  //  Info de tablas
  _provincias: Provincia[];
  _especialidades: RefepsEspecialidades[];
  _paises: Pais[];
  _institucionesFormadoras: InstitucionFormadora[];
  _residencias: ResidenciasResidenciasModel[];
  
//  _preinscripciones: PreinscripcionModel[];
  preinscripciones: any[];  // esto no va fue reemplazado por lo otro/
  residencias: any[];
  keyCodigo: string;

  _pasoActual = 0;
  _formularioCompleto = false;
  _infoPasoAPaso: any[] = [
    {
      titlulo: 'Provincia o Institución',
      subtitulo: null,
      descripcion: 'Seleccione Provincia o Institución donde desea inscribirse',
      seleccionado: true,
      completado: false
    }, {
      titlulo: 'Concurso',
      subtitulo: null,
      descripcion: 'Elegir tipo de concurso',
      seleccionado: false,
      completado: false
    }, {
      titlulo: 'Confirmar',
      subtitulo: null,
      descripcion: 'Confirmar eleccion',
      seleccionado: false,
      completado: false
    }, {
      titlulo: 'Encuesta',
      subtitulo: null,
      descripcion: 'Completar encuesta (opcional)',
      seleccionado: false,
      completado: false
    }, {
      titlulo: 'Formulario',
      subtitulo: null,
      descripcion: 'Completar formulario',
      seleccionado: false,
      completado: false
    }
  ];
  _validacionesPasos: any[] = [
    { //  _a_concursaTipo
      completado: null,
      info: 'Seleccione el tipo de concurso donde desea inscribirse'
    },
    { //  _a_concursaProvincia
      completado: null,
      info: 'Seleccione una provincia donde desea inscribirse'
    },
    { //  _a_concursaInstitucion
      completado: null,
      info: 'Seleccione una institución donde desea inscribirse'
    },
    { //  _a_concursaEspecialidad
      completado: null,
      info: 'Seleccione la especialidad a la que desea inscribirse'
    },
    { //  _b_concursotipo
      completado: null,
      info: 'Seleccione un tipo de concurso en el cual desea inscribirse'
    },
    { //  _b_concursosubtipo
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { // 
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { // 
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { // 
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { // 
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { // 
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    }
  ];
  _botones = {
    enviarFormulario: ['boton_pos', 'bot_ico_aceptar', 'Enviar formulario de preinscripción']
  };
  _muestraEstadoInscripciones = false;


 /*  _preinscripcionBusqueda: Ipreinscripcion_busqueda;
 _preinscripcionDatos: Ipreinscripcion_inscripcion;
  */


  constructor(
    public _servicio_geo: GeoService,
    private _servicio_residencias: ResidenciasService,
    private _servicio_refeps: RefepsService,
    private _servicio_degug_preinscripcion: PreinscripcionServiceDebugService
    /* public _servicio_t_provincia: ProvinciaService */
  ) { }

  ngOnInit() {
    this.keyCodigo = '$key';  // esto es el key de firebase
    this.configura();

    this._servicio_geo.provinciasObtieneTodas()
      .subscribe(data => this._provincias = data);
    this._servicio_geo.paisesObtieneTodos()
      .subscribe(data => this._paises = data);

    this._servicio_residencias.institucionesFormadorasObtieneTodas()
    .subscribe(data => this._institucionesFormadoras = data);
    this._servicio_residencias.residenciasObtieneTodas()
      .subscribe(data => this._residencias = data);

    this._servicio_refeps.especialidadesObtienetodas()
      .subscribe(data => this._especialidades = data);
    //console.log('Esp => ' + this._especialidades);

    //this._servicio_degug_preinscripcion.preinscripcionesObtieneTodas()
    //.subscribe(data => this._preinscripciones = data);
  }

  configura() {

    this._servicio_degug_preinscripcion.preinscripcionesObtieneTodas()
    .snapshotChanges()
    .subscribe(item => {
      this.preinscripciones = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x[this.keyCodigo] = element.key;
        this.preinscripciones.push(x);
      });
    });
  }

  cPanelPasos_activaPaso(evento: number): void {
    //this.cPanelPasos_activaDesactivaPaso(evento);
    console.log('cPanelPasos_activaPaso <-> ' + evento);
    if (this._pasoActual !== evento && this.validaPaso(evento)) {
      this._infoPasoAPaso.forEach(element => {element['seleccionado'] = false; });
      this._infoPasoAPaso[evento]['seleccionado'] = true;
      this._pasoActual = evento;
    }
  }

            validaPaso(pasoNumero: number): boolean {
              let respuesta = true;
              console.log('validaPaso - > ' + respuesta);
              console.log('validaPaso - > ' + pasoNumero + ' / ' + this._pasoActual);
              
              switch (this._pasoActual) {
                case 0:
                  this._validacionesPasos[0]['completado'] = false;
                  this._validacionesPasos[1]['completado'] = false;
                  this._validacionesPasos[2]['completado'] = false;
                  this._validacionesPasos[3]['completado'] = false;

                  if (this._preinscripcionModelo._a_concursaTipo === null) {
                    respuesta = false;
                    this._validacionesPasos[0]['completado'] = false;
                    console.log(' A [ FALSE ]');
                  } else {
                    this._validacionesPasos[0]['completado'] = true;
                    console.log(' A [ OK ]');
                  }
                  if (this._preinscripcionModelo._a_concursaEspecialidad === null) {
                    respuesta = false;
                    this._validacionesPasos[3]['completado'] = false;
                    console.log(' C [ FALSE ]');
                  } else { 
                    this._validacionesPasos[3]['completado'] = true;
                    console.log(' C [ OK ]');  
                  }
                  if (this._preinscripcionModelo._a_concursaTipo === 'true') {
                    console.log(' B ');
                    if (this._preinscripcionModelo._a_concursaProvincia === null) {
                      respuesta = false;
                      this._validacionesPasos[1]['completado'] = false;
                      console.log(' B [' + this._preinscripcionModelo._a_concursaTipo + '] -> ' + this._preinscripcionModelo._a_concursaProvincia);
                    } else {
                      this._validacionesPasos[1]['completado'] = true;
                      console.log(' B [ OK ]');
                    }
                  } else if (this._preinscripcionModelo._a_concursaTipo === 'false') {
                    console.log(' B ');
                    if (this._preinscripcionModelo._a_concursaInstitucion === null) {
                      respuesta = false;
                      this._validacionesPasos[2]['completado'] = false;
                      console.log(' B [' + this._preinscripcionModelo._a_concursaTipo + '] -> ' + this._preinscripcionModelo._a_concursaInstitucion);
                    } else {
                      this._validacionesPasos[2]['completado'] = true;
                      console.log(' B [ OK ]');
                    }
                  }  else {
                    console.log(' B x ' + this._preinscripcionModelo._a_concursaTipo);
                  }
                  if (respuesta === true) { this._infoPasoAPaso[0]['completado'] = true; console.log(' VALIDA paso 1 OK'); } else{ this._infoPasoAPaso[0]['completado'] = false;}                
                  break;

                case 1:
                  this._validacionesPasos[4]['completado'] = false;
                  this._validacionesPasos[5]['completado'] = false;
                  if (this._preinscripcionModelo._b_concursotipo === null) {
                    respuesta = false;
                    this._validacionesPasos[4]['completado'] = false;
                    console.log(' A [ FALSE ]');
                  } else {
                    this._validacionesPasos[5]['completado'] = true;
                    console.log(' A [ OK ]');
                  }
                  if (this._preinscripcionModelo._b_concursosubtipo === null) {
                    respuesta = false;
                    this._validacionesPasos[5]['completado'] = false;
                    console.log(' A [ FALSE ]');
                  } else {
                    this._validacionesPasos[5]['completado'] = true;
                    console.log(' A [ OK ]');
                  }
                  if (respuesta === true) { this._infoPasoAPaso[1]['completado'] = true; console.log(' VALIDA paso 1 OK'); } else{ this._infoPasoAPaso[1]['completado'] = false;}                
                  
                  break;

                case 2:
                  respuesta = true;
                  console.log('validaPaso 3 (' + pasoNumero + ') ');
                  break;
                case 3:
                  respuesta = true;
                  console.log('validaPaso 4 (' + pasoNumero + ') ');
                  break;
                case 4:
                  respuesta = true;
                  console.log('validaPaso 5 (' + pasoNumero + ') ');
                  break;
              
                default:
                console.log('validaPaso ERROR - > ' + pasoNumero + ' // ' + respuesta);
                  break;
              }
              console.log('la respuesta fue ' + respuesta);
              return respuesta;
            }

  cPanelPasos_activaDesactivaPaso(pasoLlega: number) {
    /* let pasoNumero = (pasoLlega + 1); */
    let pasoNumero = pasoLlega;
    if (this._pasoActual !== pasoNumero) {
      this._infoPasoAPaso.forEach(element => {element['seleccionado'] = false; });
      this._infoPasoAPaso[pasoNumero]['seleccionado'] = true;
      this._pasoActual = pasoNumero;
    }
  }

  cPanelPasos_chequeaEstadoDeLosPasos() {
    let resultado = 0;
    this._infoPasoAPaso.forEach(element => {
      if (element['completado']  === true) {resultado++; }
    });
    if (resultado === this._infoPasoAPaso.length) { this._formularioCompleto = true; } else { this._formularioCompleto = false; }
    console.log('Paso a paso completado => ' + this._formularioCompleto);
  }

  // Temp
  temp_completaPaso(numeroDePaso: number) {
    if (this._infoPasoAPaso[numeroDePaso]['completado'] === true){
      this._infoPasoAPaso[numeroDePaso]['completado'] = false;
    } else {
      this._infoPasoAPaso[numeroDePaso]['completado'] = true;
    }
    console.log('Paso => ' + this._infoPasoAPaso[numeroDePaso]['completado'] );
  }
  chequeaEstadoInscripciones() {
    console.log('chequeaEstadoInscripciones => ' + this._muestraEstadoInscripciones );
    if (this._muestraEstadoInscripciones === true) {
      this._muestraEstadoInscripciones = false;
    } else {
      this._muestraEstadoInscripciones = true;
    }
  }

  preinscripcionEnvia() {
    this._servicio_degug_preinscripcion.preinscripcionesInserta(this._preinscripcionModelo);
  }

/*  */
/* 
  cPanelPasos_resetea() {
    this.cPanelPasos_pasosEstados.forEach(element => {element = false; });
    this.cPanelPasos_pasosCompletados = false;
  }
 */

  /* cPanelPasos_reseteaSeleccion() {
    this._infoPasoAPaso.forEach(element => {
      element['seleccionado']  = false;
    });
  } */

/*   activaPaso(numeroDePaso: number) {
    this._pasoActual = numeroDePaso;
    console.log('activaPaso => ' + numeroDePaso);
  } */
}
