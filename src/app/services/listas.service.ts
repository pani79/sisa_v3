import { Injectable } from '@angular/core';

//  info falsa
import { usuarios, usuariosCabezaDeLista, usuariosConfiguracion } from '../data_falsa/usuarios_prueba';

// Servicios
import { UsuariosService} from './modulos/usuarios.service';

// Modelos
import { Usuario } from '../models/usuario';

// Base
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ListasService {

  t_lista: Usuario[];
  listaPedida: number;

  // Esto es temporal hasta que pueda traer por http
  i_datos: any[] = usuarios;
  i_datosCantidad: number = this.i_datos.length;
  i_cabecera: string[] = usuariosCabezaDeLista;
  i_configuracion: string[] = usuariosConfiguracion;

  datosDeLista = {
    cantidad: 0,
    datos: [],
    cabeceras: [],
    configuracion: []
  };

  constructor(
    private _usuarioService: UsuariosService
  ) { }

  obtieneLista(listaId: number): any[] {
    this.listaPedida = listaId;
    /* 
        switch (this.listaPedida) {
          case 1:
            console.log('se pidio la lista 1');
            this._usuarioService.t_usuariosObtiene();

            this._usuarioService.usuariosObtiene()
              .snapshotChanges()
              .subscribe(item => {
                this.t_lista = [];
                item.forEach(element => {
                  let x = element.payload.toJSON();
                  x["$key"] = element.key;
                  this.t_lista.push(x as Usuario);
                });
            });
            this.datosDeLista.datos = this.t_lista;
            console.log('=> ' + this.t_lista.length);
            break;
          default:
            console.log('se pidio una lista inesperada con el parametro ' + this.listaPedida);
            break;
        }
        this.datosDeLista.cabeceras = this.i_cabecera;
        this.datosDeLista.cantidad =  this.t_lista.length;
        this.datosDeLista.configuracion = this.i_configuracion;

        let exportaDatos: any[] = [
          this.datosDeLista.cantidad,
          this.datosDeLista.datos,
          this.datosDeLista.cabeceras,
          this.datosDeLista.configuracion
        ];
    */
    this.datosDeLista.cabeceras = this.i_cabecera;
    this.datosDeLista.cantidad =  2;
    this.datosDeLista.configuracion = this.i_configuracion;

    let exportaDatos: any[] = [
      this.datosDeLista.cantidad,
      this.datosDeLista.datos,
      this.datosDeLista.cabeceras,
      this.datosDeLista.configuracion
    ];

    return exportaDatos;
  }

  obtieneListaDatos(listaId: Number): any[] { 
    return this.datosDeLista.datos;
  }

  //obtienexLista():any{  }
}
