import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


//  modelos
import { Provincia } from 'src/app/models/provincia';
import { Pais } from 'src/app/models/paises';


@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private _http: HttpClient) { }

  provinciasObtieneTodas(): Observable<Provincia[]> {
    return this._http.get<Provincia[]>('http://localhost:8080/provincia/all');
  }

  paisesObtieneTodos(): Observable<Pais[]> {
    return this._http.get<Pais[]>('http://localhost:8080/pais/all');
  }
  /*
      nacionalidadesObtieneTodas(): Observable<Provincia[]> {
        return this._http.get<Provincia[]>('http://localhost:8080/provincia/all');
      }
   */
}
