import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { SisaComponent } from './components/sisa/sisa.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { MainMenuComponent } from './components/interface/main-menu/main-menu.component';
import { ShortcutsMenuComponent } from './components/interface/shortcuts-menu/shortcuts-menu.component';
import { BasicPageComponent } from './components/commons/basic-page/basic-page.component';
import { HomeLogOutComponent } from './components/views/home-log-out/home-log-out.component';
import { ResidenciasExamenesComponent } from './components/registros/residencias/residencias-examenes/residencias-examenes.component';
import { PaginaNoEncontradaComponent } from './components/views/pagina-no-encontrada/pagina-no-encontrada.component';
import { PopupComponent } from './components/commons/popup/popup.component';
import { HeaderPanelUsuarioComponent } from './components/interface/header-panel-usuario/header-panel-usuario.component';
import { PreinscripcionComponent } from './components/registros/residencias/preinscripcion/preinscripcion.component';
import { ConsultarInscripcionComponent } from './components/registros/residencias/consultar-inscripcion/consultar-inscripcion.component';

import { SisaServicioService} from './services/sisa-servicio.service';
import { ListaComponent } from './components/commons/lista/lista.component';
import { ListaMenuComponent } from './components/commons/lista-menu/lista-menu.component';
import { BotonCTextoEIconoComponent } from './components/commons/boton-ctexto-eicono/boton-ctexto-eicono.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


// import { UsuarioCreaComponent } from './components/modulos/usuarios/usuario-crea/usuario-crea.component';
// import { UsuariosComponent } from './components/modulos/usuarios/usuarios/usuarios.component';

// Ejemplos de uso
import { UsuariosLista } from './examples/usuarios/usuarios-lista/usuarios-lista.component';
import { UsuarioCrea } from './examples/usuarios/usuarios-alta/usuarios-alta.component';
import { ListabComponent } from './components/commons/listab/listab.component';
import { PObjectPropetiesPipe } from './pipes/pobject-propeties.pipe';
import { HomesComponent } from './components/modulos/homes/homes.component';
import { NoticiasComponent } from './components/modulos/noticias/noticias.component';
import { BotoneraLateralComponent } from './components/commons/botonera-lateral/botonera-lateral.component';
import { PanelImagenComponent } from './components/commons/panel-imagen/panel-imagen.component';
import { PanelImagenGrupoComponent } from './components/commons/panel-imagen-grupo/panel-imagen-grupo.component';
import { HomesContenedorComponent } from './components/modulos/homes-contenedor/homes-contenedor.component';
import { PanelNumericoGrupoComponent } from './components/commons/panel-numerico-grupo/panel-numerico-grupo.component';
import { PanelNumericoComponent } from './components/commons/panel-numerico/panel-numerico.component';
import { BuscadorComponent } from './components/commons/buscador/buscador.component';
import { ComponentesVariosComponent } from './examples/componentes-varios/componentes-varios.component';
import { PanelPasosComponent } from './components/commons/panel-pasos/panel-pasos.component';
import { EncabezadoComponent } from './components/commons/encabezado/encabezado.component';
import { TdfComponent } from './examples/formularios/tdf/tdf.component';
import { RfComponent } from './examples/formularios/rf/rf.component';
import { RecuadroInfoComponent } from './components/commons/recuadro-info/recuadro-info.component';
//  revisar estos ultimos dos si son necesarios en la version
import { UsuariosComponent } from './components/modulos/usuarios/usuarios/usuarios.component';
import { UsuarioCreaComponent } from './components/modulos/usuarios/usuario-crea/usuario-crea.component';


// const routes: Routes = [
//   { path: '', component: HomeLogOutComponent },
//   { path: 'residencias', component: ResidenciasExamenesComponent },
//   { path: '**', component: PaginaNoEncontradaComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    SisaComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    ShortcutsMenuComponent,
    BasicPageComponent,
    HomeLogOutComponent,
    ResidenciasExamenesComponent,
    PaginaNoEncontradaComponent,
    PopupComponent,
    HeaderPanelUsuarioComponent,
    PreinscripcionComponent,
    ConsultarInscripcionComponent,
    UsuarioCrea,
    ListaComponent,
    UsuariosLista,
    ListaMenuComponent,
    BotonCTextoEIconoComponent,
    ListabComponent,
    PObjectPropetiesPipe,
    HomesComponent,
    NoticiasComponent,
    BotoneraLateralComponent,
    PanelImagenComponent,
    PanelImagenGrupoComponent,
    HomesContenedorComponent,
    PanelNumericoGrupoComponent,
    PanelNumericoComponent,
    BuscadorComponent,
    ComponentesVariosComponent,
    PanelPasosComponent,
    EncabezadoComponent,
    TdfComponent,
    RfComponent,
    RecuadroInfoComponent//,

    // estos lo tuve que agregar pal deploy en prod
    , UsuariosComponent, UsuarioCreaComponent
    // UsuariosListaComponent,
    // UsuariosAltaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    RoutingModule,
    AngularFireModule.initializeApp(environment.sisaBaseApocrifa),
    AngularFireDatabaseModule
  ],
  providers: [SisaServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
