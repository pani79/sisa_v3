import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/* import {environment} from 'src/environments/environment.prod'; */
// import { Http } from '@angular/http';

//  models
import { Provincia } from '../../classes/tas';
import { InstitucionFormadora } from 'src/app/models/institucionFormadora';
import { ResidenciasPreinscripcionModel } from 'src/app/models/residencias_preinscripcion';
import { ResidenciasResidenciasModel } from 'src/app/models/residencias_residencias';

@Injectable({
  providedIn: 'root'
})
export class ResidenciasService {

  constructor(private _http: HttpClient) { }

  institucionesFormadorasObtieneTodas(): Observable<InstitucionFormadora[]> {
    return this._http.get<InstitucionFormadora[]>('http://localhost:8080/institucion/all');
  }

  residenciasObtieneTodas(): Observable<ResidenciasResidenciasModel[]> {
    return this._http.get<ResidenciasResidenciasModel[]>('http://localhost:8080/residencias/all'); 
  }

  preinscripcionesObtieneTodas(): Observable<ResidenciasPreinscripcionModel[]> {
    return this._http.get<ResidenciasPreinscripcionModel[]>('http://localhost:8080/preinscripciones/all'); 
  }

}
