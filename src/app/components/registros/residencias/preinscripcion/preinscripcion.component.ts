import { Component, OnInit } from '@angular/core';
import { Ipreinscripcion_busqueda } from './ipreinscripcion_busqueda';
import { Ipreinscripcion_inscripcion } from './ipreinscripcion_inscripcion';

// Informacion falsa
import { PROVINCIAS } from '../../../../../assets/fakeData/tablas_auxiliares';

@Component({
  selector: 's-registros-residencias-preinscripcion',
  templateUrl: './preinscripcion.component.html',
  styleUrls: ['./preinscripcion.component.css']
})
export class PreinscripcionComponent implements OnInit {

  _pasoActual = 1;
  _formularioCompleto = false;

  _preinscripcionBusqueda: Ipreinscripcion_busqueda;
  _preinscripcionDatos: Ipreinscripcion_inscripcion;

  bot_cancelar: string[] = ['boton_neg', 'bot_ico_cancelar', 'Cancelar'];
  bot_anterior: string[] = ['boton_general', 'bot_ico_listas_anterior', 'Paso anterior'];
  bot_siguiente: string[] = ['boton_general', 'bot_ico_listas_siguiente', 'Paso siguiente'];
  //  = {    _a__a_concursaId = 1; };

  // Informacion falsa
  provincias = PROVINCIAS;

  constructor() { }

  ngOnInit() {
  }

  activaPaso(numeroDePaso: number) {
    this._pasoActual = numeroDePaso;
    console.log('activaPaso => ' + numeroDePaso);
  }

}
