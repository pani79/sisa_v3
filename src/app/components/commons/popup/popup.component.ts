import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SisaServicioService } from '../../../services/sisa-servicio.service';

//import { IRegistro } from '../../../classes/iregistro';

@Component({
  selector: 's-commons-popUp',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  titulo = 'Iniciar sesión';
  _usuario: 'Ingrese su usuario';
  _palabraClave: 'Ingrese su contraseña';

  // t_usuarios = [];

  constructor(private _sisaService: SisaServicioService) { }

  ngOnInit() {
  }

  login(usuario, password: string) {
    console.log('login - ' + usuario + '/' + password);
    this._sisaService.UsuarioLoguin(usuario, password);
    // this._sisaService.UsuarioLoguin(this._usuario, this._palabraClave);
      // .subscribe(data => this.t_usuarios = data );
      // console.log('login /=> ' + this.t_usuarios.length);
  }

}
