/* import { Component, Input, OnInit } from '@angular/core'; */
import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
/* import { Observable } from 'rxjs/Observable'; */
/* import { Registro } from '../../../classes/registro'; */

@Component({
  selector: 's-commons-basicPage',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnChanges, OnInit {
   @Input() info: String[];
   private _info: String[];
  /*@Input() set info(info: string[]) {
    this._info = info;
  }

  _info: String[];
   */


  infoPagina = {
    titulo: null,
    subtitulo: null,
    color: null,
    icono: null,
    textontroductorio: [],
    location: null,
    ayuda: {}
  };

/* 
  info[0] = subtitulo
  info[1] = titulo
  info[2] = color registro
  info[3] = icono registro
  info[4] = texto introductorio
  info[5] = location volver
  info[6] = info ayuda

  //  estas dos propiedades despues las injectamos
  registro = new Registro();

  infoObtenida = {
    titulo: 'sisa-angular!!! desde info',
    subtitulo: this.registro.sigla,
    prueba: 'prueba'
  };

  infoId = 'residencias-residenciasExamenes';
  titulo = 'sisa-angular!!!';
  subtitulo = 'Hello World che!!!';

  textoIntro = 'Para información sobre los distintos concursos de residencias consulte la web del Ministerio de Salud de la Nación <a href="www.msal.gov.ar/residencias">www.msal.gov.ar/residencias</a>';
*/
  // registro: Registro = new Registro();

  constructor(private router: Router) { }


  ngOnInit() {
    // this.Configura([this.infoId]);

    this.Configura('ngOnInit', this.info);
  }
 
  ngOnChanges(changes: SimpleChanges) {
    const info: SimpleChange = changes.info;
    console.log('dato anterior : ' + info.previousValue);
    console.log('dato ahora : ' + info.currentValue);

    this._info = info.currentValue;
    this.Configura('ngOnChanges', this._info);
  }


  Configura(quienLoPide: string, datos: any[]) {
    console.log(quienLoPide + 'BasicPageComponent => ' + datos);
    this.infoPagina.subtitulo = datos[0];
    this.infoPagina.titulo = datos[1];
    this.infoPagina.color = datos[2];
    this.infoPagina.icono = datos[3];
    this.infoPagina.textontroductorio = datos[4];
    this.infoPagina.location = datos[5];
    this.infoPagina.ayuda = datos[6];
    console.log(quienLoPide + 'BasicPageComponent titulo => ' + this.infoPagina['titulo']);
    /*
        console.log(datos);
        this.infoObtenida.subtitulo = this.registro.sigla;
        this.registro.sigla = 'RESIDES';
        this.registro.clase = 'reg_residencias';
        this.infoObtenida.prueba = 'RESIDES';
        console.log(this.registro);
     */
/* 
      console.log(' ><');
      if (this._info[3] !== 'askeletor') {
        console.log(this._info[3] + ' ---------------<');
      } else {
        console.log(' -------askeletor--------<');
        this.router.navigateByUrl('/uops');
      }
 */
  }
/*  */
  ayudaEnLinea() {
    console.log('ayudaEnLinea 0> ' + this.info[5]);
  }

}
