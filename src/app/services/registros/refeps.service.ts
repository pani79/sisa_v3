import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  modelos
import { RefepsEspecialidades } from 'src/app/models/refepsEspecialidades';

@Injectable({
  providedIn: 'root'
})
export class RefepsService {

  constructor(private _http: HttpClient) { }

  especialidadesObtienetodas(): Observable<RefepsEspecialidades[]> {
    return this._http.get<RefepsEspecialidades[]>('http://localhost:8080/refeps/especialidades/all');
  }
}
