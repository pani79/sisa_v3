import { Component, OnInit } from '@angular/core';

//  Modelo
import { ResidenciasResidentesModel } from 'src/app/models/residencias_residentes';

//  Servicios
import { PreinscripcionServiceDebugService } from '../preinscripcion/preinscripcion-service-debug.service';

@Component({
  selector: 's-registros-residencias-inscripcionConsultarcodigoalfanumerico',
  templateUrl: './consultar-inscripcion-codigoalfanumerico.component.html',
  styleUrls: ['./consultar-inscripcion-codigoalfanumerico.component.css']
})
export class ConsultarInscripcionCodigoalfanumericoComponent implements OnInit {

  _residentes: ResidenciasResidentesModel[];
  _residentesX: any[];
  _botones = {
      buscar: ['boton_general', 'bot_ico_buscar', 'Buscar inscripción']
    };
  keyCodigo: string;

  constructor(private _residenciasService: PreinscripcionServiceDebugService) { }

  ngOnInit() {
    this.keyCodigo = '$key';  // esto es el key de firebase
    this.configura();
  }
  configura() {

    this._residenciasService.preinscripcionesObtieneTodas()
    .snapshotChanges()
    .subscribe(item => {
      this._residentesX = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x[this.keyCodigo] = element.key;
        this._residentesX.push(x);
      });
    });
  }



}
