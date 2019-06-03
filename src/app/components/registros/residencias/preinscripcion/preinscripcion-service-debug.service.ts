import { Injectable } from '@angular/core';

//  Base
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//  Modelo
import { PreinscripcionModel } from './preinscripcion_model';

@Injectable({
  providedIn: 'root'
})
export class PreinscripcionServiceDebugService {

  _preinscripcionesLista: AngularFireList<any>;

  constructor( private _fireBase: AngularFireDatabase) { }

  preinscripcionesObtieneTodas() {
    return this._preinscripcionesLista = this._fireBase.list('residencias_preinscripciones');
  }

  preinscripcionesInserta(preinscripcion: PreinscripcionModel) {
    this.preinscripcionesObtieneTodas();
    this._preinscripcionesLista.push(
      {
        _a_concursaTipoProvincia: preinscripcion._a_concursaTipoProvincia,
        _a_concursaProvincia: preinscripcion._a_concursaProvincia,
        _a_concursaInstitucion: preinscripcion._a_concursaInstitucion,
        _a_concursaEspecialidad: preinscripcion._a_concursaEspecialidad,
        _b_concursotipo: preinscripcion._b_concursotipo,
        _b_concursosubtipo: preinscripcion._b_concursosubtipo
      }
    );
  }

}
