import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { HomesComponent} from '../components/modulos/homes/homes.component';

import { HomeLogOutComponent } from '../components/views/home-log-out/home-log-out.component';
import { ResidenciasExamenesComponent } from '../components/registros/residencias/residencias-examenes/residencias-examenes.component';
import { PaginaNoEncontradaComponent } from '../components/views/pagina-no-encontrada/pagina-no-encontrada.component';


// Ejemplos de uso
import { UsuariosLista } from '../examples/usuarios/usuarios-lista/usuarios-lista.component';
import { UsuarioCrea } from '../examples/usuarios/usuarios-alta/usuarios-alta.component';

const routes: Routes = [
  { path: '', component: HomeLogOutComponent },
  { path: 'homes/:id', component: HomesComponent },
  // { path: 'homes', component: HomesComponent },
  { path: 'residencias', component: ResidenciasExamenesComponent },
  { path: 'usuarios', component: UsuariosLista },
  { path: 'usuariosCrea', component: UsuarioCrea },
  /* Pruebas */
  /* { path: 'homeV2/:id', component: HomesV2Component }, */
  /* Default */
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  /* imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ], */
  exports: [ RouterModule],
  declarations: []
})

export class RoutingModule {}
