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
  _infocomponentes: any[] = [

    //  0 = _c_panelPasos
    [
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
        titlulo: 'Paso 4',
        subtitulo: null,
        descripcion: 'lore loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
        seleccionado: false,
        completado: false
      }, {
        titlulo: 'Paso 5',
        subtitulo: 'subtitulo paso 3',
        descripcion: 'lore loco lorem ipsum loco lorem ipsum loco lorem. ipsum loco lorem ipsum loco',
        seleccionado: false,
        completado: false
      }
    ],

    {
      i_h1: 'Componente Enabezado',
      i_h2: null,
      i_h3: null,
      i_h4: null,
      i_h5: 'Esto es un H5',
      i_p: 'Este componentese usa basicamente para poner titulos y textos dentro de paginas/componentes. <a target="_blank" href="http://www.msal.gov.ar/residencias">Esto es un link mágico</a>.',
    }

  ];
  _textos: any[] = [
    {
      i_h1: 'Componente Enabezado',
      i_h2: null,
      i_h3: null,
      i_h4: null,
      i_h5: 'Esto es un H5',
      i_p: 'Este componentese usa basicamente para poner titulos y textos dentro de paginas/componentes. <a target="_blank" href="http://www.msal.gov.ar/residencias">Esto es un link mágico</a>.',
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
