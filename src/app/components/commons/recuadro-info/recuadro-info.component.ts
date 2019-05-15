import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-commons-recuadroInfo',
  templateUrl: './recuadro-info.component.html',
  styleUrls: ['./recuadro-info.component.css']
})
export class RecuadroInfoComponent implements OnInit {

  _infoInput: {};
  @Input() infoInput: {
    configuracion: {
      tipo: 'simple', // simple
      color: 'blue',
      colorRegistro: 'reg_refes',
      distribucionHorizontal: true // T-F
    },
    informacion: {
      titulo: 'Titulo',
      subtitulo: 'Subtitulo',
      texto: ['IMPORTANTE: El correo electrónico es imprescindible para la gestión de su pre-inscripción ya que el sistema lo utiliza para notificar diferentes operaciones (Por ejemplo para el envío del código que le permitirá consultar el estado de su inscripción). Verifique que sea correcto y que lo utilice actualmente.']
    }
  };
  constructor() { }

  ngOnInit() {  this._infoInput = this.infoInput;
  }

}
