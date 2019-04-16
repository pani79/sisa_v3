import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-commons-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  botones = {
    buscar: ['boton_general', 'bot_ico_buscar', 'Buscar']
  };

  @Input() inputInfoBuscador: {};
  constructor() { }

  ngOnInit() {
  }

}
