import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes-varios',
  templateUrl: './componentes-varios.component.html',
  styleUrls: ['./componentes-varios.component.css']
})
export class ComponentesVariosComponent implements OnInit {

  _infoPaginacabecera: string[] = [
    null,
    'Componentes varios',
    'mod_sisa',
    'askeletor',
    'Lista de componentes desarrollados para su uso.'
      /* 
        info[0] = subtitulo
        info[1] = titulo
        info[2] = color registro
        info[3] = icono registro
        info[4] = texto introductorio
        info[5] = location volver
        info[6] = info ayuda
     */
  ];
  _prueba = 'upalala';

  _c_panelPasos = [
    {
      titlulo: 'Paso 1',
      subtitulo: 'subtitulo paso 1',
      descripcion: 'lorem ipsum loco lorem ipsum loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
      seleccionado: true,
      completado: false
    }, {
      titlulo: 'Paso 2',
      subtitulo: null,
      descripcion: 'lore loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
      seleccionado: false,
      completado: false
    }, {
      titlulo: 'Paso 3',
      subtitulo: 'subtitulo paso 3',
      descripcion: 'lore loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
      seleccionado: false,
      completado: false
    }, {
      titlulo: 'Paso 2',
      subtitulo: null,
      descripcion: 'lore loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
      seleccionado: false,
      completado: false
    }, {
      titlulo: 'Paso 3',
      subtitulo: 'subtitulo paso 3',
      descripcion: 'lore loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
      seleccionado: false,
      completado: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
