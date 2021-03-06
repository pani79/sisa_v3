import { Component, OnInit } from '@angular/core';
/* import { Subscription, Observable} from 'rxjs'; */

//  Modelos
import { ResidenciasPreinscripcionModel } from '../../../../models/residencias_preinscripcion';
import { ResidenciasResidenciasModel } from 'src/app/models/residencias_residencias';

import { Provincia } from 'src/app/models/provincia';
import { InstitucionFormadora } from 'src/app/models/institucionFormadora';
import { RefepsEspecialidades } from 'src/app/models/refepsEspecialidades';
import { Pais } from 'src/app/models/paises';
import { EstadoCivil } from 'src/app/models/estadoCivil';

//  Servicios
import { GeoService } from 'src/app/services/tas/geo.service';
import { ResidenciasService } from 'src/app/services/registros/residencias.service';
import { RefepsService } from 'src/app/services/registros/refeps.service';

import { PreinscripcionServiceDebugService } from './preinscripcion-service-debug.service';


import { Ipreinscripcion_busqueda } from './ipreinscripcion_busqueda';
import { Ipreinscripcion_inscripcion } from './ipreinscripcion_inscripcion';
import { IfStmt } from '@angular/compiler';
/* */

// Informacion falsa
/* import { PROVINCIAS } from '../../../../../assets/fakeData/tablas_auxiliares'; */

@Component({
  selector: 's-registros-residencias-preinscripcion',
  templateUrl: './preinscripcion.component.html',
  styleUrls: ['./preinscripcion.component.css']
})
export class PreinscripcionComponent implements OnInit {

  // por si no hay conexion a la base
  _offLineMode = false;

  _preinscripcionModelo = new ResidenciasPreinscripcionModel (
    null,     // public _a_concursaId: number,
    null,    // public _a_concursaTipo: boolean,
    null,     // public _a_concursaProvincia: number,
    null,     // public _a_concursaInstitucion: number,
    null,     // public _a_concursaEspecialidad: number,
    
    null,     // public _b_concursotipo: number,
    null,     // public _b_concursosubtipo: number

    null,     // public _c_concurso: number,

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // public _d_razoneseleccion: number[],
    null,     // public _d_dondeseencontrara: number,
    null,     // public _d_ambitodesarrollo: number,

    null,     // public _e_nombre: string,
    null,     // public _e_apellido: string,
    null,     // public _e_numerodocumento: number,
    null,     // public _e_sexo: number,
    null,     // public _e_estadocivil: number,
    null,     // public _e_hijos: number
    
    null,     // _e_nacionalidad: number,
    null,     // _e_nacimientoFecha: number,
    null,     // _e_nacimientoPais: number,
    null,     // _e_nacimientoProvincia: number,
    null,     // _e_email: string,
    null,     // _e_domicilioProvincia: number,
    null,     // _e_domicilioLocalidad: number,
    null,     // _e_domicilioDomicilio: number,
    null,     // _e_domicilioNro: number,
    null,     // _e_domicilioPiso: number,
    null,     // _e_domicilioDepto: number,
    null,     // _e_domicilioCP: number,
    null,     // _e_domicilioTelATipo: number,
    null,     // _e_domicilioTelANro: number,
    null,     // _e_domicilioTelBTipo: number,
    null,     // _e_domicilioTelBNro: number,
    null,     // _e_domicilioTelCTipo: number,
    null,     // _e_domicilioTelCNro: number,
    null,     // _e_domicilioTelDTipo: number,
    null,     // _e_domicilioTelDNro: number,
    null,     // _e_profesionTitulo: number,
    null,     // _e_profesionTipoMatricula: number,
    null,     // _e_profesionAnoIngreso: number,
    null,     // _e_profesionPromedio: number,
    null     // _e_profesionTituloEnTramite: boolean

  );

  //  Info de tablas
  _estadoCivil: EstadoCivil[];
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
      completado: false,
      habilitado: true
    }, {
      titlulo: 'Concurso',
      subtitulo: null,
      descripcion: 'Elegir tipo de concurso',
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Confirmar',
      subtitulo: null,
      descripcion: 'Confirmar eleccion',
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Encuesta',
      subtitulo: null,
      descripcion: 'Completar encuesta (opcional)',
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Formulario',
      subtitulo: null,
      descripcion: 'Completar formulario',
      seleccionado: false,
      completado: false,
      habilitado: false
    }
  ];
  _validacionesCampos: any[] = [
    { //0  _a_concursaTipo
      completado: null,
      info: 'Seleccione el tipo de concurso donde desea inscribirse'
    },
    { //1  _a_concursaProvincia
      completado: null,
      info: 'Seleccione una provincia donde desea inscribirse'
    },
    { //2  _a_concursaInstitucion
      completado: null,
      info: 'Seleccione una institución donde desea inscribirse'
    },
    { //3  _a_concursaEspecialidad
      completado: null,
      info: 'Seleccione la especialidad a la que desea inscribirse'
    },
    { //4  _b_concursotipo
      completado: null,
      info: 'Seleccione un tipo de concurso en el cual desea inscribirse'
    },
    { //5  _b_concursosubtipo
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { //6  _c_concurso
      completado: null,
      info: 'Seleccione el concurso en el cual desea inscribirse'
    },
    { //7  _d_razoneseleccion
      completado: null,
      info: 'La suma de todos los campos debe ser 100, por favor revise los valores que ha puesto y reconsidere sus estudios primarios.'
    },
    { //8  _d_dondeseencontrara
      completado: null,
      info: 'Seleccione una de las opciones'
    },
    { //9  _d_ambitodesarrollo
      completado: null,
      info: 'Seleccione una de las opciones'
    },
    { //10  _e_nombre
      completado: null,
      info: 'Ingrese su nombre'
    },
    { //11  _e_apellido
      completado: null,
      info: 'Ingrese su apellido'
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
    if (this._especialidades === undefined) {
      this._offLineMode = true;
      console.log('trabajaremos en modo OFFLINE');
    } else {
      console.log('DEBUG => ' + this._especialidades);
    }
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
        this._validacionesCampos[0]['completado'] = false;
        this._validacionesCampos[1]['completado'] = false;
        this._validacionesCampos[2]['completado'] = false;
        this._validacionesCampos[3]['completado'] = false;

        if (this._preinscripcionModelo._a_concursaTipo === null) {
          respuesta = false;
          this._validacionesCampos[0]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this._validacionesCampos[0]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (this._preinscripcionModelo._a_concursaEspecialidad === null) {
          respuesta = false;
          this._validacionesCampos[3]['completado'] = false;
          console.log(' C [ FALSE ]');
        } else {
          this._validacionesCampos[3]['completado'] = true;
          console.log(' C [ OK ]');
        }

        if (this._preinscripcionModelo._a_concursaTipo === true) {
          console.log(' B ');
          if (this._preinscripcionModelo._a_concursaProvincia === null) {
            respuesta = false;
            this._validacionesCampos[1]['completado'] = false;
            console.log(' B [' + this._preinscripcionModelo._a_concursaTipo + '] -> ' + this._preinscripcionModelo._a_concursaProvincia);
          } else {
            this._validacionesCampos[1]['completado'] = true;
            console.log(' B [ OK ]');
          }
        } else if (this._preinscripcionModelo._a_concursaTipo === false) {
          console.log(' B ');
          if (this._preinscripcionModelo._a_concursaInstitucion === null) {
            respuesta = false;
            this._validacionesCampos[2]['completado'] = false;
            console.log(' B [' + this._preinscripcionModelo._a_concursaTipo + '] -> ' + this._preinscripcionModelo._a_concursaInstitucion);
          } else {
            this._validacionesCampos[2]['completado'] = true;
            console.log(' B [ OK ]');
          }
        }  else {
          console.log(' B x ' + this._preinscripcionModelo._a_concursaTipo);
        }

        if (respuesta === true) {
          this._infoPasoAPaso[0]['completado'] = true;
          this._infoPasoAPaso[1]['habilitado'] = true;
          console.log(' VALIDA paso 1 OK');
        } else{ this._infoPasoAPaso[0]['completado'] = false;}
        break;


      case 1:
        this._validacionesCampos[4]['completado'] = false;
        this._validacionesCampos[5]['completado'] = false;
        if (this._preinscripcionModelo._b_concursotipo === null) {
          respuesta = false;
          this._validacionesCampos[4]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this._validacionesCampos[4]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (this._preinscripcionModelo._b_concursosubtipo === null) {
          respuesta = false;
          this._validacionesCampos[5]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this._validacionesCampos[5]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (respuesta === true) { 
          this._infoPasoAPaso[1]['completado'] = true;
          this._infoPasoAPaso[2]['habilitado'] = true;
          console.log(' VALIDA paso 2 OK');
        } else{ this._infoPasoAPaso[1]['completado'] = false;}
        break;

      case 2:
        this._validacionesCampos[6]['completado'] = false;
        if (this._preinscripcionModelo._c_concurso === null) {
          respuesta = false;
          this._validacionesCampos[6]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this._validacionesCampos[6]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (respuesta === true) {
          this._infoPasoAPaso[2]['completado'] = true;
          this._infoPasoAPaso[3]['habilitado'] = true;
          console.log(' VALIDA paso 3 OK'); 
        } else{ this._infoPasoAPaso[2]['completado'] = false;}                
        break;

      case 3:
        this._validacionesCampos[7]['completado'] = false;
        this._validacionesCampos[8]['completado'] = false;
        this._validacionesCampos[9]['completado'] = false;
        /* 
          if (this._preinscripcionModelo._b_concursotipo === null) {
            respuesta = false;
            this._validacionesCampos[4]['completado'] = false;
            console.log(' A [ FALSE ]');
          } else {
            this._validacionesCampos[5]['completado'] = true;
            console.log(' A [ OK ]');
          }
          */
        
        //console.log(' A [ OK ]' + preinscripcionForm.value.razones_radio01);
        //console.log(' A [ OK ]' + #preinscripcionForm.razones_radio01);
        //console.log(' A [ OK ]' + _d_razones_01);
        console.log(' A -> ' + this._preinscripcionModelo._d_razoneseleccion[0]);
        let resultadorazones = 0;
        this._preinscripcionModelo._d_razoneseleccion.forEach(v => resultadorazones += Number(v));
        if (resultadorazones !== 100) {
          respuesta = false;
          this._validacionesCampos[7]['completado'] = false;
          console.log(' A [ ERROR ] -> ' + resultadorazones);
        } else {
          this._validacionesCampos[7]['completado'] = true;
          console.log(' A [ OK ] -> ' + resultadorazones);
        }
        
        if (this._preinscripcionModelo._d_dondeseencontrara === null) {
          respuesta = false;
          this._validacionesCampos[8]['completado'] = false;
          console.log(' B [ FALSE ]');
        } else {
          this._validacionesCampos[8]['completado'] = true;
          console.log(' B [ OK ]');
        }
        if (this._preinscripcionModelo._d_ambitodesarrollo === null) {
          respuesta = false;
          this._validacionesCampos[9]['completado'] = false;
          console.log(' C [ FALSE ]');
        } else {
          this._validacionesCampos[9]['completado'] = true;
          console.log(' C [ OK ]');
        }
        if (respuesta === true) {
          this._infoPasoAPaso[3]['completado'] = true;
          this._infoPasoAPaso[4]['habilitado'] = true;
          console.log(' VALIDA paso 3 OK');
        } else { this._infoPasoAPaso[3]['completado'] = false;}
        break;



      case 4:
        this._validacionesCampos[10]['completado'] = false;
        this._validacionesCampos[11]['completado'] = false;
        
        if (this._preinscripcionModelo._e_nombre === null) {
          respuesta = false;
          this._validacionesCampos[10]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this._validacionesCampos[10]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (this._preinscripcionModelo._e_apellido === null) {
          respuesta = false;
          this._validacionesCampos[11]['completado'] = false;
          console.log(' B [ FALSE ]');
        } else {
          this._validacionesCampos[11]['completado'] = true;
          console.log(' B [ OK ]');
        }
        console.log('validaPaso 5 (' + pasoNumero + ') ');
        break;
    
      default:
      console.log('validaPaso ERROR - > ' + pasoNumero + ' // ' + respuesta);
        break;
    }
    if (this._infoPasoAPaso[pasoNumero]['habilitado'] !== true) { respuesta = false; }
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

  chequeaEstadoInscripciones() {
    console.log('chequeaEstadoInscripciones => ' + this._muestraEstadoInscripciones );
    if (this._muestraEstadoInscripciones === true) {
      this._muestraEstadoInscripciones = false;
    } else {
      this._muestraEstadoInscripciones = true;
    }
  }

  seleccionaResidencia(evento: number): void {
    console.log('seleccionaResidencia => ' + evento );
      this._preinscripcionModelo._c_concurso = evento;
  }


  // Temp
  /* 
    temp_completaPaso(numeroDePaso: number) {
      if (this._infoPasoAPaso[numeroDePaso]['completado'] === true){
        this._infoPasoAPaso[numeroDePaso]['completado'] = false;
      } else {
        this._infoPasoAPaso[numeroDePaso]['completado'] = true;
      }
      console.log('Paso => ' + this._infoPasoAPaso[numeroDePaso]['completado'] );
    }
  */

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
