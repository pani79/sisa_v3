import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 's-commons-panelImagen',
  templateUrl: './panel-imagen.component.html',
  styleUrls: ['./panel-imagen.component.css']
})
export class PanelImagenComponent implements OnInit {
  @Input() infoPanel: String[] = [];
  @Output() public salida = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  manda(e: any) { this.salida.emit(this.infoPanel['titulo']); /* alert(e); */ }

}
