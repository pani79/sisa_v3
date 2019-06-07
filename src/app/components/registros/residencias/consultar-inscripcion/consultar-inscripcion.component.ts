import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResidenciasService } from '../../../../services/registros/residencias.service';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 's-registros-residencias-inscripcionConsultar',
  templateUrl: './consultar-inscripcion.component.html',
  styleUrls: ['./consultar-inscripcion.component.css']
})
export class ConsultarInscripcionComponent implements OnInit {

  consultarInscripcionResultado = false;
  t_resultado: any[];

   constructor(private _serviResidencias: ResidenciasService) { }

  ngOnInit() {
    this._serviResidencias.residenciasObtieneTodas();
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
