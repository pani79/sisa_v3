import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// Servicios
import { ListasService } from '../../../services/listas.service';
import { UsuariosService } from '../../../services/modulos/usuarios.service';

// Modelo
import { Usuario} from '../../../models/usuario';
import { element } from 'protractor';

@Component({
  selector: 'app-listab',
  templateUrl: './listab.component.html',
  styleUrls: ['./listab.component.css']
})


export class ListabComponent implements OnInit {
  @Input() idLista: number;
  @Output() public salida = new EventEmitter();

  usuariosLista: any[];
  temp = 'usuario';
  modelo = ['usuario', 'pasword', 'n_documento', 'funcion', 'email'];

  eventoLanzado = '';
  accionEmitida = {
    tipo: '',
    valor: ''
  };
  keyCodigo: string;

  constructor(private _usuarioServicio: UsuariosService) { }

  ngOnInit() {
    this.keyCodigo = '$key';  // esto es el key de firebase
    this.configura();
  }

  configura() {

    this._usuarioServicio.usuariosObtiene()
    .snapshotChanges()
    .subscribe(item => {
      this.usuariosLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x[this.keyCodigo] = element.key;
        this.usuariosLista.push(x);
      });
    });
  /*
    // Original
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
  */
  }

  accion(tipo: string, parametro: string) {
    // this.eventoLanzado = parametro;
    console.log('actualizaPadre ¡=> ' + this.eventoLanzado);
    this.accionEmitida.tipo = tipo;
    this.accionEmitida.valor = parametro;
    this.emite();
  }

  emite() {
    console.log('mandamos v => ' + (this.accionEmitida.valor + this.accionEmitida.tipo));
    this.salida.emit(this.accionEmitida.valor + this.accionEmitida.tipo);
  }

  tempF(inde: number): string {  return ('hola' + inde); }


  buchon(a: any, b: any) {  console.log(a + '/' + b + '=' + (a == b)); }

  // tempG(inde: object) {    return <Usuario> inde.n_documento;   }

}
