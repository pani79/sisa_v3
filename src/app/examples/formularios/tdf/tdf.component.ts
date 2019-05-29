import { Component, OnInit } from '@angular/core';

import { Provincia } from '../../../classes/tas';
import { PROVINCIAS } from '../../../../assets/fakeData/tablas_auxiliares';
import { UsuarioModel } from './usuario_model';
import { TdfServicioService } from './tdf-servicio.service';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  _infoPaginacabecera: string[] = [
    null,
    'Template Driven Form',
    'mod_developer',
    'askeletor',
    null
  ];
  _provincias: Provincia[] = PROVINCIAS;
  usuarioModelo = new UsuarioModel (
    'juan',
    'Perez',
    'prueba@test.com',
    'Buenos Aires',
    'a',
    true
  );
  usuariosLista: UsuarioModel[];
  keyCodigo: string;

  constructor(private _tdfservice: TdfServicioService) { }

  ngOnInit() {
    // this._tdfservice.usuariosObtiene();
    this.keyCodigo = '$key';  // esto es el key de firebase
    this.configura();
  }

  configura() {

    this._tdfservice.usuariosObtiene()
    .snapshotChanges()
    .subscribe(item => {
      this.usuariosLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x[this.keyCodigo] = element.key;
        this.usuariosLista.push(x);
      });
    });
  }

  usuarioEnvia() { this._tdfservice.usuarioInserta(this.usuarioModelo);  }
}
