import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/* import {environment} from 'src/environments/environment.prod'; */
// import { Http } from '@angular/http';

//  models
import { Provincia } from '../../classes/tas';
import { InstitucionFormadora } from 'src/app/models/institucionFormadora';

@Injectable({
  providedIn: 'root'
})
export class ResidenciasService {
    /* 
      _url = 'http://localhost:3000/api/residencias';
      _provincias: Provincia[];
      _provinciaInscripcion: Provincia;
      t_residencias = [];
     */
  constructor(private _http: HttpClient) { }

  institucionesFormadorasObtienetodas(): Observable<InstitucionFormadora[]> {
    return this._http.get<InstitucionFormadora[]>('http://localhost:8080/institucion/all');
  }



  getResidencias() { return null; }
  /* 
    inscripcionConsulta(id: string) {
      console.log('inscripcionConsulta' + id);
    }

    getProvincias(): Observable<Provincia[]> { return this._httpService.get<Provincia[]>(environment.apiUrl + '/inscripcion/provincias'); }

    getResidencias(): Observable<any[]> {
      const _residencias = this._httpService.get<any[]>(this._url);
      console.log('has llamado a ' + _residencias.toString());
      return this._httpService.get<any[]>('/api/residencias');
    }
 */
}
