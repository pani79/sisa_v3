import { Component, OnInit } from '@angular/core';
/* import { Subscription, Observable} from 'rxjs'; */
/* 
import { Ipreinscripcion_busqueda } from './ipreinscripcion_busqueda';
import { Ipreinscripcion_inscripcion } from './ipreinscripcion_inscripcion';
 */

//  Modelos
import { Provincia } from 'src/app/models/provincia';
import { InstitucionFormadora } from 'src/app/models/institucionFormadora';
import { RefepsEspecialidades } from 'src/app/models/refepsEspecialidades';

//  Servicios
import { GeoService } from 'src/app/services/tas/geo.service';
import { ResidenciasService } from 'src/app/services/registros/residencias.service';
import { RefepsService } from 'src/app/services/registros/refeps.service';

// Informacion falsa
/* import { PROVINCIAS } from '../../../../../assets/fakeData/tablas_auxiliares'; */

@Component({
  selector: 's-registros-residencias-preinscripcion',
  templateUrl: './preinscripcion.component.html',
  styleUrls: ['./preinscripcion.component.css']
})
export class PreinscripcionComponent implements OnInit {
  
  _provincias: Provincia[];
  _especialidades: RefepsEspecialidades[];
  _institucionesFormadoras: InstitucionFormadora[];

  _pasoActual = 1;
  _formularioCompleto = false;

 /*  _preinscripcionBusqueda: Ipreinscripcion_busqueda;
 _preinscripcionDatos: Ipreinscripcion_inscripcion;
  */
  bot_cancelar: string[] = ['boton_neg', 'bot_ico_cancelar', 'Cancelar'];
  bot_anterior: string[] = ['boton_general', 'bot_ico_listas_anterior', 'Paso anterior'];
  bot_siguiente: string[] = ['boton_general', 'bot_ico_listas_siguiente', 'Paso siguiente'];
  //  = {    _a__a_concursaId = 1; };

  // Informacion falsa
  /* provincias = PROVINCIAS; */

  constructor(
    public _servicio_geo: GeoService,
    private _servicio_residencias: ResidenciasService,
    private _servicio_refeps: RefepsService
    /* public _servicio_t_provincia: ProvinciaService */
  ) { }

  ngOnInit() {
    this._servicio_geo.provinciasObtieneTodas()
      .subscribe(data => this._provincias = data);
    this._servicio_residencias.institucionesFormadorasObtienetodas()
      .subscribe(data => this._institucionesFormadoras = data);
    this._servicio_refeps.especialidadesObtienetodas()
      .subscribe(data => this._especialidades = data);
    console.log('Esp => ' + this._especialidades);
  }

  activaPaso(numeroDePaso: number) {
    this._pasoActual = numeroDePaso;
    console.log('activaPaso => ' + numeroDePaso);
  }

}
