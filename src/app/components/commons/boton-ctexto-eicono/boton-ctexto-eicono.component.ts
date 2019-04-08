import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 's-commons-BotonCTextoEIcono',
  templateUrl: './boton-ctexto-eicono.component.html',
  styleUrls: ['./boton-ctexto-eicono.component.css']
})
export class BotonCTextoEIconoComponent implements OnInit {

  @Input() infoBoton: string[];

  tipo = 'boton_pos';
  icono = 'bot_ico_aceptar';
  texto = 'Enviar datos';

  constructor() { }

  ngOnInit() {
    this.tipo = this.infoBoton[0];
    this.icono = this.infoBoton[1];
    this.texto = this.infoBoton[2];
  }

}
