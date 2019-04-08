import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's-views-paginaNoEncontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})
export class PaginaNoEncontradaComponent implements OnInit {

  /* Info para boton */
  bot_agregar: string[] = ['boton_pos', 'bot_ico_agregar', 'Agregar'];

  constructor() { }

  ngOnInit() {
  }

  /*
  $('[data-toggle="tooltip"]').tooltip();
*/
}
