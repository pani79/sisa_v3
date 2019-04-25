import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


//  modelos
import { Provincia } from 'src/app/models/provincia';


@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private _http: HttpClient) { }

  provinciasObtieneTodas(): Observable<Provincia[]> {
    return this._http.get<Provincia[]>('http://localhost:8080/provincia/all');
  }
}
