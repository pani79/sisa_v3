import { Component, OnInit } from '@angular/core';

import { Provincia } from '../../../classes/tas';
import { PROVINCIAS } from '../../../../assets/fakeData/tablas_auxiliares';
import { UsuarioModel } from './usuario_model';


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
    'nombre che',
    'apellido che',
    'email che'
  );

  constructor() { }

  ngOnInit() {
  }

}
