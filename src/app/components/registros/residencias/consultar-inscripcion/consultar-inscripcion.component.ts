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
    this._serviResidencias.getResidencias();
  }


  consultarInscripcionConsulta(dato: string) {
    console.log('consultarInscripcionConsulta => ' + dato);

    // this.t_resultado = this._serviResidencias.getResidencias();

    this._serviResidencias.getResidencias()
      .subscribe( res => {
        console.log(res);
        this.t_resultado = res;
      });

    // this.consultarInscripcionResultado = true;
    // this._serviResidencias.get('http://localhost:3000/api/residencias', { responseType: 'text' }).subscribe(response => {
    //     this.t_usuarios = JSON.parse(response);
    //     console.log(response);
    //     console.log('*> ' + this.t_usuarios);
    //   });

      // this._serviResidencias.get(this._usuarioUrl, { responseType: 'text' }).subscribe(response => {
      //     this._usuariot2 = JSON.parse(response);
      //     console.log(response);
      //     console.log('*> ' + this._usuariot2);
      //   });

      /*
    this.consultarInscripcionResultado = true;
    let elregistro:Registro = this._serviSisa.RegistroDatos();
    console.log('=> ' + elregistro.nombre);
    */
    this.consultarInscripcionResultado = true;
  }



  realizaAccion(evento: string) {
    console.log('realizaAccion => ' + evento);
  }

}
