import { Component, OnInit } from '@angular/core';
import { SisaServicioService} from '../../../services/sisa-servicio.service'

@Component({
  selector: 's-interface-header-panelUsuario',
  templateUrl: './header-panel-usuario.component.html',
  styleUrls: ['./header-panel-usuario.component.css']
})
export class HeaderPanelUsuarioComponent implements OnInit {

  botones = {
    ingresar: ['boton_general', 'bot_ico_acceder', 'Ingresar']
  };
  constructor(private serviSisa: SisaServicioService) { }

  ngOnInit() {
  }

  UsuarioLogueado(): boolean {  return this.serviSisa.UsuarioLogueado(); }
}
