import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Base
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Modelo
import { Usuario} from '../../models/usuario';

// datos falsos
import { usuarios } from '../../data_falsa/usuarios';

// import {} from 'rxjs/Operator'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // readonly _url = 'http://localhost:3000/api/usuarios';
  _usuarioSeleccionado: Usuario = new Usuario('default', 'default', 0, 'default', 'default');
  _usuariosLista: AngularFireList<any>;
  t_usuariosLista: any[];


  constructor(private firebase: AngularFireDatabase) {    }


  usuariosObtiene() {
    // alert('MAZINGA -> ' + this._usuariosLista);
    return this._usuariosLista = this.firebase.list('products');
  }

  t_usuariosObtiene() {
    this.usuariosObtiene();
    return this._usuariosLista;
  }

  usuarioInserta(usuario: Usuario) {
    this.usuariosObtiene();
    console.log(
      usuario.usuario + ' - ' + usuario.password + ' - ' + usuario.n_documento + ' - ' + usuario.email + ' - ' + usuario.funcion
    );
    this._usuariosLista.push({
      usuario: usuario.usuario,
      pasword: usuario.password,
      n_documento: usuario.n_documento,
      email: usuario.email,
      funcion: usuario.funcion
    });
  }
  /*
  constructor(private _http: HttpClient) {
    this._usuarioSeleccionado = new Usuario();
    this._usuarios = usuarios;
   }


  usuarioCrea(usuario: Usuario) {
  console.log('usuarioCrea => ' + usuario.nombre);
    this._http.post('/api/usuarios', usuario);
  }

   usuarioElimina(elid: any) {
     return this._http.delete('/api/usuarios', elid);
   }

  usuariosTrae() {    return this._http.get<any[]>('/api/usuarios');  }
 */
}
