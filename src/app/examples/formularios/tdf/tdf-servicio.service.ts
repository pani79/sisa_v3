import { Injectable } from '@angular/core';


//  Base
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//  Modelo
import { UsuarioModel } from './usuario_model';


@Injectable({
  providedIn: 'root'
})
export class TdfServicioService {

  _usuariosLista: AngularFireList<any>;

  constructor(private _firebase: AngularFireDatabase) { }

  usuariosObtiene(){
    return this._usuariosLista = this._firebase.list('ex_usuariosFormularios');
  }
  usuarioInserta(usuario: UsuarioModel){
    this.usuariosObtiene();
    this._usuariosLista.push(
      {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        provincia: usuario.povincia,
        opcion: usuario.opcion,
        subscribir: usuario.subscribir
        /* 
        
        public nombre: string,
        public apellido: string,
        public email: string,
        public povincia: string,
        public opcion: string,
        public subscribir: boolean
        */
      }
    );
  }
}
