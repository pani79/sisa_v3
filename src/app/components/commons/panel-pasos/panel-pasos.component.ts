import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-commons-panel-pasos',
  templateUrl: './panel-pasos.component.html',
  styleUrls: ['./panel-pasos.component.css']
})
export class PanelPasosComponent implements OnInit {

  /* 
  paso = {
    titlulo: 'Paso 1',
    subtitulo: 'subtitulo paso 1',
    descripcion: 'lorem ipsum loco lorem ipsum loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
    seleccionado: true,
    completado: false
  };
  _pasos: this.paso[];
 */
  _pasos: {}[];
  @Input() infoInput: any[];
  @Output() salida: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this._pasos = this.infoInput;
    //console.log
  }

}
