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
        _b_concursosubtipo: preinscripcion._b_concursosubtipo,

        _c_concurso: preinscripcion._c_concurso,

        _d_razoneseleccion: preinscripcion._d_razoneseleccion,
        _d_dondeseencontrara: preinscripcion._d_dondeseencontrara,
        _d_ambitodesarrollo: preinscripcion._d_ambitodesarrollo,

        _e_nombre: preinscripcion._e_nombre,
        _e_apellido: preinscripcion._e_apellido,
        _e_numerodocumento: preinscripcion._e_numerodocumento,
        _e_sexo: preinscripcion._e_sexo,
        _e_estadocivil: preinscripcion._e_estadocivil,
        _e_hijos: preinscripcion._e_hijos
        /* 
        ,
        _b_concursosubtipo: preinscripcion._b_concursosubtipo,
        _b_concursosubtipo: preinscripcion._b_concursosubtipo
         */

      }
    );
  }

}
