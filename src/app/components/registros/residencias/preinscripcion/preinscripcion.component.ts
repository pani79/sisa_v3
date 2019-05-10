import { Component, OnInit } from '@angular/core';
/* import { Subscription, Observable} from 'rxjs'; */

//  Modelos
import { Provincia } from 'src/app/models/provincia';
import { InstitucionFormadora } from 'src/app/models/institucionFormadora';
import { RefepsEspecialidades } from 'src/app/models/refepsEspecialidades';

//  Servicios
import { GeoService } from 'src/app/services/tas/geo.service';
import { ResidenciasService } from 'src/app/services/registros/residencias.service';
import { RefepsService } from 'src/app/services/registros/refeps.service';


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

  _provincias: Provincia[];
  _especialidades: RefepsEspecialidades[];
  _institucionesFormadoras: InstitucionFormadora[];


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


 /*  _preinscripcionBusqueda: Ipreinscripcion_busqueda;
 _preinscripcionDatos: Ipreinscripcion_inscripcion;
  */


  constructor(
    public _servicio_geo: GeoService,
    private _servicio_residencias: ResidenciasService,
    private _servicio_refeps: RefepsService
    /* public _servicio_t_provincia: ProvinciaService */
  ) { }

  ngOnInit() {
    this._servicio_geo.provinciasObtieneTodas()
      .subscribe(data => this._provincias = data);
    this._servicio_residencias.institucionesFormadorasObtienetodas()
      .subscribe(data => this._institucionesFormadoras = data);
    this._servicio_refeps.especialidadesObtienetodas()
      .subscribe(data => this._especialidades = data);
    //console.log('Esp => ' + this._especialidades);
  }

  cPanelPasos_activaPaso(evento: number): void {
    //this.cPanelPasos_activaDesactivaPaso(evento);
    if (this._pasoActual !== evento) {
      this._infoPasoAPaso.forEach(element => {element['seleccionado'] = false; });
      this._infoPasoAPaso[evento]['seleccionado'] = true;
      this._pasoActual = evento;
    }
  }

  /* cPanelPasos_reseteaSeleccion() {
    this._infoPasoAPaso.forEach(element => {
      element['seleccionado']  = false;
    });
  } */

/*   activaPaso(numeroDePaso: number) {
    this._pasoActual = numeroDePaso;
    console.log('activaPaso => ' + numeroDePaso);
  } */

  cPanelPasos_activaDesactivaPaso(pasoLlega: number) {
    /* let pasoNumero = (pasoLlega + 1); */
    let pasoNumero = pasoLlega;
    if (this._pasoActual !== pasoNumero) {
      this._infoPasoAPaso.forEach(element => {element['seleccionado'] = false; });
      this._infoPasoAPaso[pasoNumero]['seleccionado'] = true;
      this._pasoActual = pasoNumero;
    }
/* 
    if (this._infoPasoAPaso[pasoNumero]['completado'] === true) {
      this._infoPasoAPaso[pasoNumero]['completado'] = false;
      this._infoPasoAPaso[pasoNumero]['seleccionado'] = false;
    } else {
      this._infoPasoAPaso[pasoNumero]['completado'] = true;
      this._infoPasoAPaso[pasoNumero]['seleccionado'] = true;
    }
     */
    /* this.cPanelPasos_chequeaEstadoDeLosPasos(); */
  }

  cPanelPasos_chequeaEstadoDeLosPasos() {
    let resultado = 0;
    this._infoPasoAPaso.forEach(element => {
      if (element['completado']  === true) {resultado++; }
    });
    if (resultado === this._infoPasoAPaso.length) { this._formularioCompleto = true; } else { this._formularioCompleto = false; }
    console.log('Paso a paso completado => ' + this._formularioCompleto);
  }
/*  */
/* 
  cPanelPasos_resetea() {
    this.cPanelPasos_pasosEstados.forEach(element => {element = false; });
    this.cPanelPasos_pasosCompletados = false;
  }
 */

  // Temp
  temp_completaPaso(numeroDePaso: number) {
    if (this._infoPasoAPaso[numeroDePaso]['completado'] === true){
      this._infoPasoAPaso[numeroDePaso]['completado'] = false;
    } else {
      this._infoPasoAPaso[numeroDePaso]['completado'] = true;
    }
    console.log('Paso => ' + this._infoPasoAPaso[numeroDePaso]['completado'] );
  }

}
