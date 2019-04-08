import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../../services/modulos/usuarios.service';

@Component({
  selector: 's-modulos-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

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
    'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema.',
    'temp_usu',
    'volverAtras'
  ];

  listaRequerida: Number = 1;
/* 
  infoLista: any[] = [
    ['A', 'Gestión de usuarios y permisos', 'mod_sisa', 'mod_usuarios', 'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema.'],
    ['B', 'Gestión de usuarios', 'mod_sisa', 'mod_usuarios', 'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema.'],
    ['C', 'permisos', 'mod_sisa', 'mod_usuarios', 'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema.'],
    ['D', 'Gestión de usuarios y permisos', 'mod_sisa', 'mod_usuarios', 'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema.']
  ];
   */
  bot_agregar: string[] = ['boton_pos', 'bot_ico_agregar', 'Agregar'];
  accionLanzada: string;

  constructor(public _usuariosService: UsuariosService, private router: Router) { }

  // ngOnInit() {  }
/*
  ngOnChanges(cambio: SimpleChanges) {
    console.log('-> ' + cambio);
    //this.accionLanzada
  }
*/
  accion(): void {
    console.log('SALIDA');
    this.router.navigateByUrl('/residencias');
  }

  modifica(par: string): void {
    this.accionLanzada = par;
    //alert(this.accionLanzada);
    this.accion();
  }

  // { path: 'residencias', component: ResidenciasExamenesComponent },
}
