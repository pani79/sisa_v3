import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/modulos/usuarios.service';



@Component({
  selector: 's-examples-usuarios-usuariosLista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})


export class UsuariosLista implements OnInit {

  listaRequerida = 1;
  
  //  info es la informacion que se pasa a traves del <s-commons-basicPage> para que se muestre
  // 0 = Subtitulo o sigla. Si no lleva no se muestra y se reordena
  // 1 = Titulo o sigla
  // 2 = Color del registro o modulo
  // 3 = Icono del registro o modulo
  // 4 = Texto de la intro
  // 5 = Id de la ayuda
  // 6 = para volver atras o tal vez se solucione con el path
  info: string[] = [
    '',
    'Gestión de usuarios y permisos',
    'mod_sisa',
    'bot_ico_usuarios',
    'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema. Go  <a ng-href="string">{{bot_agregar}}</a> to `<a href="{{myVar}}>`{{myVar}}`</a>` to learn!',
    'temp_usu',
    'volverAtras'
  ];


  bot_agregar: string[] = ['boton_pos', 'bot_ico_agregar', 'Agregar'];
  accionLanzada: string;



  constructor(
    public _usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this._usuariosService.usuariosObtiene();
  }

  accion(): void {
    console.log('SALIDA');
    this.router.navigateByUrl('/usuariosCrea');
  }

  modifica(par: string): void {
    this.accionLanzada = par;
    //alert(this.accionLanzada);
    this.accion();
  }

  agregaUsuario() {  this.router.navigateByUrl('/usuariosCrea'); }

  // { path: 'residencias', component: ResidenciasExamenesComponent },
}
