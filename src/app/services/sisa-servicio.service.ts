import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario';
import { Registro } from '../classes/registro';
import { Registros } from '../data/registros';

import { IRegistro } from '../classes/iregistro';
// import {environment} from 'src/environments/environment.prod';


  // import { users } from '../fakeData/users.json';

@Injectable({
  providedIn: 'root'
})
export class SisaServicioService {

    _sisaInteface = true;
    _usuario: Usuario;
    _usuarioLogueado = false;
    _usuarioUrl = '/assets/fakeData/users.json';
    // _usuarioUrl = 'https://jsonplaceholder.typicode.com/todos/1';


    _UrlTAProvincia = 'http://localhost:8080/inscripcion/provincias';

    // _Urltemp = 'http://www.pani.wirez.com.ar/pruebas/users.json';
    // _usuariot: string[];
    // _usuariot2: JSON;
    // customersObservable: Observable<any[]>;


  constructor(private _httpService: HttpClient) {}


  InterfaceSisaObtiene = function(): boolean {
    // console.log('InterfaceSisaObtiene => ' + this._sisaInteface);
    return this._sisaInteface;
  };

  InterfaceSisa() {
    console.log('_sisaInteface es => ' + this._sisaInteface);
    if (this._sisaInteface === true) { this._sisaInteface = false;  } else { this._sisaInteface = true;  }
  }

  UsuarioLogueado(): boolean {
    return this._usuarioLogueado;
  }

  UsuarioLoguin(usuario, pasword: string): Boolean {
    console.log('iniciando loguin => ' + usuario + ' <=> ' + pasword);
    // this._httpService.get(this._usuarioUrl, { responseType: 'text' }).subscribe(response => {
    //     this._usuariot2 = JSON.parse(response);
    //     console.log(response);
    //     console.log('*> ' + this._usuariot2);
    //   });
    return true;
    // return this._httpService.get<IRegistro[]>(this._usuarioUrl);
  }

  testA() {
    console.log('UsuarioLoguin es <= / ');
    // this._httpService.get(this._Urltemp, { responseType: 'text' }).subscribe(response => {
    //   this._usuariot2 = JSON.parse(response);
    //   console.log(response);
    //   console.log('*> ' + this._usuariot2);
    // });
  }


  testB() {
    console.log('testB UsuarioLoguin es <= / ');
    fetch(this._usuarioUrl)
    .then(response => response.json())
    .then(json => console.log(json));
  }

  RegistroDatos(): Registro {
    const registro: Registro = new Registro();
    return registro;
  }
  
}
