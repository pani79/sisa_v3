import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { UsuariosService } from '../../../../services/modulos/usuarios.service';
import { ResidenciasService } from '../../../../services/registros/residencias.service';

// TEMP en caso de que lo mandemos a algun lado
import { Router } from '@angular/router';

// el MODELO
import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 's-modulos-usuarios-usuarioCrea',
  templateUrl: './usuario-crea.component.html',
  styleUrls: ['./usuario-crea.component.css']
})

export class UsuarioCreaComponent implements OnInit {

  info: string[] = [
    /*
        info es la informacion que se pasa a traves del <s-commons-basicPage> para que se muestre
        0 = Subtitulo o sigla. Si no lleva no se muestra y se reordena
        1 = Titulo o sigla
        2 = Color del registro o modulo
        3 = Icono del registro o modulo
        4 = Texto de la intro
        5 = Id de la ayuda
        6 = para volver atras o tal vez se solucione con el path    
    */
    '',
    'Gestión de usuarios y permisos',
    'mod_sisa',
    'bot_ico_usuarios',
    'La lista muestra los usuarios bajo su responsabilidad de gestión en el sistema.',
    'temp_usu',
    'volverAtras'
  ];
  bot_enviar: string[] = ['boton_pos', 'bot_ico_aceptar', 'Enviar datos'];

  usuario = new Usuario('emilio 2', 'pani', 12456789);
  usuariosTraidos: any[];

  // borrar lo de residencias

  // t_buchon: string[];
  /* 
  UsuarioForm = new FormGroup({
    usuario: new FormControl('Zoraks es un buen nombre'),
    usuarioPasword: new FormControl('')
     */
    /* 
    ,
    usuarioPaswordRepeat: new FormControl(''),
    usuarioDireccion: new FormGroup({
      usuarioProvincia: new FormControl(''),
      usuarioCiudad: new FormControl(''),
      usuarioCP: new FormControl('')
    })
  }); 
  */
/* 
  UsuarioNuevoForm = new FormGroup({
    nombre: new FormControl('Zoraks rules')
  });

  UsuarioEliminaForm = new FormGroup({
    id: new FormControl('12')
  });
  respuesta: any[];
   */
  //prueba="Prueba !!!";


    submitted = false;

  constructor(private _serviUsuarios: UsuariosService, private router: Router) { }

  ngOnInit() {
    // this.t_buchon.push("x");
    // this.respuesta.push('2');
    // this.usuariosTraidos = this._serviUsuarios.usuariosObtiene();
  }

  usuarioEnvia() {
    this._serviUsuarios.usuarioInserta(this.usuario);
  }

  onSubmit() { this.submitted = true; }
    /* 
      usuarioEnvia(formularioDeUsuario: NgForm) {
        this._serviUsuarios.usuarioInserta(formularioDeUsuario.value);
      }
    */
    /*
      usuarioSubmit(datos){
        console.log("usuarioSubmit => " + datos);
        // this.t_buchon[0] = dato;
        this._serviUsuarios.usuarioCrea(datos);
      }

      usuarioNSubmit(datos) {
        console.log('usuarioNSubmit //=> ' + datos.nombre);
        // this.t_buchon[0] = dato;
        // try {  this._serviUsuarios.usuarioCrea(datos); } catch (err) {  console.log(err); }
        this._serviUsuarios.usuarioCrea(datos);
      }

      usuarioElimina(elid) {
        console.log('usuarioElimina //=> ' + elid);
        // this.t_buchon[0] = dato;
        this._serviUsuarios.usuarioElimina(elid);
      }

      usuariosCarga(){
        console.log("usuarioNSubmit //=> ");
        // this.t_buchon[0] = dato;

        this._serviUsuarios.usuariosTrae()
          .subscribe( res => {
            console.log(res);
            this.respuesta = res;
        });
        console.log("usuarioNSubmit //=> " + this._serviUsuarios.usuariosTrae());
      }

      usuarioCargaInfoApi(){
        console.log("usuarioCargaInfoApi ");
        this.UsuarioForm.setValue({
          usuario: 'Zoraks es un buen nombre',
          usuarioPasword: 'as',
          usuarioPaswordRepeat: 'asd',
          usuarioDireccion:{
            usuarioProvincia: 'cordobs',
            usuarioCiudad: 'carlospaz',
            usuarioCP: '1234'
          }
        });
      }
    */
}
