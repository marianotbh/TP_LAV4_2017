import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/pantallas/inicio/inicio.component';
import { JuegoComponent } from './componentes/pantallas/juego/juego.component';
import { RegistroComponent } from './componentes/pantallas/registro/registro.component';
import { QuienSoyComponent } from './componentes/pantallas/quien-soy/quien-soy.component';
import { NavegacionComponent } from './componentes/piezas/navegacion/navegacion.component';
import { CabeceraComponent } from './componentes/piezas/cabecera/cabecera.component';
import { PieComponent } from './componentes/piezas/pie/pie.component';
import { MenuInicioComponent } from './componentes/piezas/menu-inicio/menu-inicio.component';
import { MenuJuegosComponent } from './componentes/piezas/menu-juegos/menu-juegos.component';
import { FormLoginComponent } from './componentes/piezas/form-login/form-login.component';
import { FormRegistroComponent } from './componentes/piezas/form-registro/form-registro.component';
import { JuegoAnagramaComponent } from './componentes/juegos/juego-anagrama/juego-anagrama.component';
import { JuegoPptComponent } from './componentes/juegos/juego-ppt/juego-ppt.component';
import { JuegoAgilidadComponent } from './componentes/juegos/juego-agilidad/juego-agilidad.component';
import { JuegoAdivinaComponent } from './componentes/juegos/juego-adivina/juego-adivina.component';
import { JuegoDownasaurComponent } from './componentes/juegos/juego-downasaur/juego-downasaur.component';
import { ListadoComponent } from './componentes/piezas/listado/listado.component';
import { ErrorComponent } from './componentes/pantallas/error/error.component';
import { ConfiguracionComponent } from './componentes/pantallas/configuracion/configuracion.component';
import { ListadoPptComponent } from './componentes/piezas/listado-ppt/listado-ppt.component';
import { ListadoDownasaurComponent } from './componentes/piezas/listado-downasaur/listado-downasaur.component';
import { ListadoAgilidadComponent } from './componentes/piezas/listado-agilidad/listado-agilidad.component';
import { ListadoAdivinaComponent } from './componentes/piezas/listado-adivina/listado-adivina.component';
import { RuteoModule } from './ruteo/ruteo.module';
import { HostService } from './servicios/host.service';
import { HttpClientModule } from '@angular/common/http';
import { ListadoJugadoresComponent } from './componentes/piezas/listado-jugadores/listado-jugadores.component';
import { PaisesService } from './servicios/paises.service';
import { JuegoService } from './servicios/juego.service';
import { UsuariosService } from './servicios/usuarios.service';
import { ListadoAnagramaComponent } from './componentes/piezas/listado-anagrama/listado-anagrama.component';
import { TerminosYCondicionesComponent } from './componentes/piezas/terminos-y-condiciones/terminos-y-condiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JuegoComponent,
    RegistroComponent,
    QuienSoyComponent,
    NavegacionComponent,
    CabeceraComponent,
    PieComponent,
    MenuInicioComponent,
    MenuJuegosComponent,
    FormLoginComponent,
    FormRegistroComponent,
    JuegoAnagramaComponent,
    JuegoPptComponent,
    JuegoAgilidadComponent,
    JuegoAdivinaComponent,
    JuegoDownasaurComponent,
    ListadoComponent,
    ErrorComponent,
    ConfiguracionComponent,
    ListadoPptComponent,
    ListadoDownasaurComponent,
    ListadoAgilidadComponent,
    ListadoAdivinaComponent,
    ListadoJugadoresComponent,
    ListadoAnagramaComponent,
    TerminosYCondicionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RuteoModule,
    AngularFileUploaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    HostService,
    NgbActiveModal,
    UsuariosService,
    JuegoService,
    PaisesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormLoginComponent,
    TerminosYCondicionesComponent
  ]
})

export class AppModule { }
