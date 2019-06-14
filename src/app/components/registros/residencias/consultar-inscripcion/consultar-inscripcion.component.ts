import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

//  Modelo
import { ResidenciasResidentesModel } from 'src/app/models/residencias_residentes';

//  Servicios
import { ResidenciasService } from '../../../../services/registros/residencias.service';


@Component({
  selector: 's-registros-residencias-inscripcionConsultar',
  templateUrl: './consultar-inscripcion.component.html',
  styleUrls: ['./consultar-inscripcion.component.css']
})
export class ConsultarInscripcionComponent implements OnInit {

  _residentes: ResidenciasResidentesModel[];
  consultarInscripcionResultado = false;
  t_resultado: any[];
  _botones = {
    buscar: ['boton_general', 'bot_ico_buscar', 'Buscar inscripción']
  };

   constructor(private _serviResidencias: ResidenciasService) { }

  ngOnInit() {
    this._serviResidencias.residentesObtieneTodos()
      .subscribe(data => this._residentes = data);
  }


  consultarPreinscripcionConsulta(dato: string) {
    console.log('consultarInscripcionConsulta => ' + dato);

    // this.t_resultado = this._serviResidencias.getResidencias();

    this._serviResidencias.preinscripcionesObtieneTodas()
      .subscribe( res => {
        console.log(res);
        this.t_resultado = res;
      });

    this.consultarInscripcionResultado = true;
  }



  realizaAccion(evento: string) {
    console.log('realizaAccion => ' + evento);
  }

}
