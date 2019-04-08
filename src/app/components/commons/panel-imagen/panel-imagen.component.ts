import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-commons-panelImagen',
  templateUrl: './panel-imagen.component.html',
  styleUrls: ['./panel-imagen.component.css']
})
export class PanelImagenComponent implements OnInit {
  @Input() infoPanel: String[];
  @Output() public salida = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
