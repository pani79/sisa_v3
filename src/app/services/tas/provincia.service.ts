import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../../models/provincia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>('http://localhost:8080/provincia/all');
  }

}
