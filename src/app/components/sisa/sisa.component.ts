import { Component, OnInit } from '@angular/core';
import { SisaServicioService } from '../../services/sisa-servicio.service';

import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-sisa',
  templateUrl: './sisa.component.html',
  styleUrls: ['./sisa.component.css']
})

export class SisaComponent implements OnInit {

  usuario: Usuario;

  constructor(private _servicioPrincipal: SisaServicioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    console.log('el usuario es ' + this.usuario.usuario);
  }

  SisaInterfaceConsulta(): boolean {   return this._servicioPrincipal.InterfaceSisaObtiene(); }

}
