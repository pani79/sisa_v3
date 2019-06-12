import { Injectable } from '@angular/core';

//  Base
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//  Modelo
import { ResidenciasPreinscripcionModel } from '../../../../models/residencias_preinscripcion';

@Injectable({
  providedIn: 'root'
})
export class PreinscripcionServiceDebugService {

  _preinscripcionesLista: AngularFireList<any>;

  constructor( private _fireBase: AngularFireDatabase) { }

  preinscripcionesObtieneTodas() {
    return this._preinscripcionesLista = this._fireBase.list('residencias_preinscripciones');
  }

  preinscripcionesInserta(preinscripcion: ResidenciasPreinscripcionModel) {
    this.preinscripcionesObtieneTodas();
    this._preinscripcionesLista.push(
      {
        _a_concursaTipo: preinscripcion._a_concursaTipo,
        _a_concursaProvincia: preinscripcion._a_concursaProvincia,
        _a_concursaInstitucion: preinscripcion._a_concursaInstitucion,
        _a_concursaEspecialidad: preinscripcion._a_concursaEspecialidad,
        _b_concursotipo: preinscripcion._b_concursotipo,
        _b_concursosubtipo: preinscripcion._b_concursosubtipo
      }
    );
  }

}