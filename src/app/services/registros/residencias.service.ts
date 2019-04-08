import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment.prod';
// import { Http } from '@angular/http';

import { Provincia } from '../../classes/tas';

@Injectable({
  providedIn: 'root'
})
export class ResidenciasService {

  _url = 'http://localhost:3000/api/residencias';
  _provincias: Provincia[];
  _provinciaInscripcion: Provincia;
  // Debug
  t_residencias = [];

  constructor(private _httpService: HttpClient) { }

  inscripcionConsulta(id: string) {
    console.log('inscripcionConsulta' + id);
    // console.log(this._http.get('https://sisa.msal.gov.ar/sisa/services/rest/puco/{27528261}POST{"usuario":"epanizza","clave":"facil1"}'));
  }

  getProvincias(): Observable<Provincia[]> { return this._httpService.get<Provincia[]>(environment.apiUrl + '/inscripcion/provincias'); }

  getResidencias(): Observable<any[]> {
    const _residencias = this._httpService.get<any[]>(this._url);
    console.log('has llamado a ' + _residencias.toString());
    return this._httpService.get<any[]>('/api/residencias');
    // console.log('has llamado a getResidencias');

    // this.consultarInscripcionResultado = true;
    // this._serviResidencias.get('http://localhost:3000/api/residencias', { responseType: 'text' }).subscribe(response => {
    //     this.t_usuarios = JSON.parse(response);
    //     console.log(response);
    //     console.log('*> ' + this.t_usuarios);
    //   });
  }

}
