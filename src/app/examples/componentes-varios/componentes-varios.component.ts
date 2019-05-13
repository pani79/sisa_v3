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

    //  0 = componente pasos (_c_panelPasos)
    [
      {
        titlulo: 'Paso 1',
        subtitulo: 'subtitulo paso 1 complicado con el texto',
        descripcion: 'Seleccione Provincia o Institución donde desea inscribirse',
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
    //  1 = componente encabezado
    {
      i_h1: 'Componente Enabezado',
      i_h2: null,
      i_h3: null,
      i_h4: 'Esto es un H4',
      i_h5: null,
      i_p: 'Este componentese usa basicamente para poner titulos y textos dentro de paginas/componentes. <a target="_blank" href="http://www.msal.gov.ar/residencias">Esto es un link mágico</a>.',
    }
  ];

  // componente pasos (_c_panelPasos)
  c0_pasos_botones = {
    paso_1: ['boton_general', 'bot_ico_aceptar', 'Paso 1'],
    paso_2: ['boton_general', 'bot_ico_aceptar', 'Paso 2'],
    paso_3: ['boton_general', 'bot_ico_aceptar', 'Paso 3'],
    paso_4: ['boton_general', 'bot_ico_aceptar', 'Paso 4'],
    paso_5: ['boton_general', 'bot_ico_aceptar', 'Paso 5'],
    completar: ['boton_pos', 'askeletor', 'Completar paso a paso']
  };
  c0_pasoActual = 1;
  c0_pasosCompletados = false;
  c0_pasosEstados: boolean[] = [false, false, false, false, false];

  

  constructor() { }

  ngOnInit() {
  }

  // componente pasos (_c_panelPasos)
  c0_activaDesactivaPaso(pasoNumero: number) {
    if (pasoNumero !== this.c0_pasoActual) {
      this.c0_pasoActual = pasoNumero;
      this.c0_pasosEstados[pasoNumero] = true;
      this._infocomponentes[0][pasoNumero]['completado'] = true;
      this._infocomponentes[0][pasoNumero]['seleccionado'] = true;
    }
    /* 
        if (this.c0_pasosEstados[pasoNumero] === true) {
          this.c0_pasosEstados[pasoNumero] = false;
          this._infocomponentes[0][pasoNumero]['completado'] = false;
        } else {
          this.c0_pasosEstados[pasoNumero] = true;
          this._infocomponentes[0][pasoNumero]['completado'] = true;
          this.c0_pasoActual = (pasoNumero + 1);
        }
     */
    this.c0_chequeaEstadoDeLosPasos();
  }

  c0_chequeaEstadoDeLosPasos() {
    let resultado = 0;
    this.c0_pasosEstados.forEach(element => {
      if (element === true) {resultado++; }
    });
    if (resultado === this.c0_pasosEstados.length) { this.c0_pasosCompletados = true; } else { this.c0_pasosCompletados = false; }
    console.log('Paso a paso completado => ' + this.c0_pasosCompletados);
  }

  c0_resetea() {
    this.c0_pasosEstados.forEach(element => {element = false; });
    this.c0_pasosCompletados = false;
  }
  c0_activaPaso(evento: number): void {
    this.c0_activaDesactivaPaso(evento);
  }

}
