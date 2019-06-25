import { Component, OnInit } from '@angular/core';
import { Registro } from '../../../../classes/registro';
// import { Registros } from '../../../../data/registros';
import { AyudaEnLinea } from '../../../../classes/ayudaImplementacion';
import { SisaServicioService } from '../../../../services/sisa-servicio.service';
import { ResidenciasService } from '../../../../services/registros/residencias.service';
/*
import { FormsModule } from '@angular/forms';
*/

@Component({
  selector: 's-registros-residencias-residenciasExamenes',
  templateUrl: './residencias-examenes.component.html',
  styleUrls: ['./residencias-examenes.component.css']
})
export class ResidenciasExamenesComponent implements OnInit {

// tslint:disable-next-line:max-line-length
/*  textoIntro: string = 'Para información sobre los distintos concursos de residencias consulte la web del Ministerio de Salud de la Nación www.msal.gov.ar/residencias';  */

  //  info es la informacion que se pasa a traves del <s-commons-basicPage> para que se muestre
  // 0 = Subtitulo o sigla. Si no lleva no se muestra y se reordena
  // 1 = Titulo o sigla
  // 2 = Color del registro o modulo
  // 3 = Icono del registro o modulo
  // 4 = Texto de la intro
  info: string[] = [
    '',
    'Exámenes para residencias',
    'reg_residencias',
    'reg_residencias',
    'Para información sobre los distintos concursos de residencias consulte la web del Ministerio de Salud de la Nación www.msal.gov.ar/residencias'
  ];

  //  de donde saca la informaccion
  registro: Registro;
  //info = 'residencias-residenciasExamenes';
  infoRegistro = 'residencias';
  _ayuda: AyudaEnLinea = new AyudaEnLinea();

  preinscripcion = false;
  consultarInscripcion = false;
  readjudicacion = false;
  readjudicacionResultado = false;  // esto despues deberia eliminarlo
  consultarInscripcioncodigoAlfanumerico = false;

  // Debug

  constructor(private _serviSisa: SisaServicioService) { }

  ngOnInit() {
    this._ayuda.obtieneLink();
  }

  operaBotoneraPrincipal(trae: number) {
    this.preinscripcion = false;
    this.consultarInscripcion = false;
    this.readjudicacion = false;
    this.consultarInscripcioncodigoAlfanumerico = false;
    if (trae === 1) {
      this.preinscripcion = true;
    } else if (trae === 2) {
      this.consultarInscripcion = true;
    } else if (trae === 3) {
      this.readjudicacion = true;
    } else if (trae === 4) {
      this.consultarInscripcioncodigoAlfanumerico = true;
    }
  }


  readjudicacionConsulta(trae: number) {
    this.readjudicacionResultado = true;
  }

}
