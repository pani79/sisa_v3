import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  modelos
import { EstadoCivil } from 'src/app/models/estadoCivil';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private _http: HttpClient) {}

  estadoCivilObtieneTodos(): Observable<EstadoCivil[]> {
    return this._http.get<EstadoCivil[]>('http://localhost:8080/estado_civil/all');
  }

}
