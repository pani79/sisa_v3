import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-commons-listaMenu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css']
})
export class ListaMenuComponent implements OnInit {

  @Input() infoDeLista: {};
  @Input() propiedadesDeLista: {};
  @Output() public salida = new EventEmitter();

  // titaneventoLanzado = this.propiedadesDeLista.cantidad;

  constructor() { }

  ngOnInit() {
    //$('[data-toggle="tooltip"]').tooltip();
    // this.titaneventoLanzado = this.propiedadesDeLista.cantidad;
  }


}
