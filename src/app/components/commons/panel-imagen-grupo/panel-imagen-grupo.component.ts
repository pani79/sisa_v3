import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-commons-panelImagenGrupo',
  templateUrl: './panel-imagen-grupo.component.html',
  styleUrls: ['./panel-imagen-grupo.component.css']
})
export class PanelImagenGrupoComponent implements OnInit {
  @Input() infoPaneles: String[];
  @Output() public salida = new EventEmitter();

  _info: string[];

  constructor() { }

  ngOnInit() {
    /* this._info = ['hola', 'mundo', 'skeletor', 'bestman', 'trap jaw']; */
  }

}
