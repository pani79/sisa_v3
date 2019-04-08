import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// Servicios
import { ListasService } from '../../../services/listas.service';
import { UsuariosService } from '../../../services/modulos/usuarios.service';

// Modelo
import { Usuario} from '../../../models/usuario';
import { element } from 'protractor';


@Component({
  selector: 's-commons-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() idLista: number;
  @Output() public salida = new EventEmitter();
  /*
    //  @Output() public salida: EventEmitter<string> = new EventEmitter<string>();
    //  @Output() salida: EventEmitter<string> = new EventEmitter<string>();
  */

  listaPedida: number;
  usuariosLista: Usuario[];

  // listaDatos: any[];
  listaHead: string[];

  // lo que le envio al menu de lista o cabecera
  lista_datos = {
    datos: [],
    cabecera: [],
    configuracion: [],
  };
  lista_propiedades = {
    cantidad: 0,
    cantidad_grupos: 0,
    pagina_actual: 9,
    paginas: 0,
    registros_muestra_inicio: 2,
    registros_muestra_fin: 10
  };

  eventoLanzado = '';
  accionEmitida = {
    tipo: '',
    valor: ''
  };


  constructor(
    public _listaService: ListasService,
    public _usuarioServicio: UsuariosService 
  ) { }

  ngOnInit() {
    this.configura();
  }

  configura() {

    this.listaPedida = this.idLista;

    let datosImportados: any[];

    datosImportados =  this._listaService.obtieneLista(this.listaPedida);
    console.log('Batman say ' + datosImportados[0]);
    this.lista_propiedades.cantidad = datosImportados[0];

    this.lista_datos.datos = datosImportados[1];
    this.lista_datos.cabecera = datosImportados[2];
    this.lista_datos.configuracion = datosImportados[3];

    this._usuarioServicio.usuariosObtiene()
      .snapshotChanges()
      .subscribe(item => {
        this.usuariosLista = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.usuariosLista.push(x as Usuario);
        });
      });
  }

  eliminar(valorPasado: any) {
    console.log('eliminar ' + valorPasado);
  }

  emite() {
    console.log('mandamos v => ' + (this.accionEmitida.valor + this.accionEmitida.tipo));
    this.salida.emit(this.accionEmitida.valor + this.accionEmitida.tipo);
  }

  /*
    upalala() {
      this.contador ++;
      console.log('HOLA MUNDO => ' + this.contador);
      this.salida.emit('Un cacho de  Cultura => ' + this.contador);
    }
    buchon(param: string) {
      console.log('HOLA MUNDO => ' + param);
    }
  */

  accion(tipo: string, parametro: string) {
    // this.eventoLanzado = parametro;
    console.log('actualizaPadre ¡=> ' + this.eventoLanzado);
    this.accionEmitida.tipo = tipo;
    this.accionEmitida.valor = parametro;
    this.emite();
  }

  actualizaLista(tipo: string) {
    this.eventoLanzado = tipo;
    console.log('actualizaPadre ¡=> ' + this.eventoLanzado);
    this.emite();
  }

}
