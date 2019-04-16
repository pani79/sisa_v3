import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-modulos-homes-contenedor',
  templateUrl: './homes-contenedor.component.html',
  styleUrls: ['./homes-contenedor.component.css']
})
export class HomesContenedorComponent implements OnInit {

  @Input() inputInfo: {};

  constructor() { }

  ngOnInit() {
  }

}
