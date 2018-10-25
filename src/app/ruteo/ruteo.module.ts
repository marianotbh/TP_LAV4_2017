import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../componentes/pantallas/inicio/inicio.component';
import { ErrorComponent } from '../componentes/pantallas/error/error.component';
import { RegistroComponent } from '../componentes/pantallas/registro/registro.component';
import { JuegoAdivinaComponent } from '../componentes/juegos/juego-adivina/juego-adivina.component';
import { ListadoAdivinaComponent } from '../componentes/piezas/listado-adivina/listado-adivina.component';
import { JuegoAgilidadComponent } from '../componentes/juegos/juego-agilidad/juego-agilidad.component';
import { ListadoAgilidadComponent } from '../componentes/piezas/listado-agilidad/listado-agilidad.component';
import { ListadoPptComponent } from '../componentes/piezas/listado-ppt/listado-ppt.component';
import { ListadoDownasaurComponent } from '../componentes/piezas/listado-downasaur/listado-downasaur.component';
import { ConfiguracionComponent } from '../componentes/pantallas/configuracion/configuracion.component';
import { ListadoComponent } from '../componentes/piezas/listado/listado.component';
import { ListadoJugadoresComponent } from '../componentes/piezas/listado-jugadores/listado-jugadores.component';
import { JuegoComponent } from '../componentes/pantallas/juego/juego.component';
import { MenuJuegosComponent } from '../componentes/piezas/menu-juegos/menu-juegos.component';
import { JuegoPptComponent } from '../componentes/juegos/juego-ppt/juego-ppt.component';
import { FormLoginComponent } from '../componentes/piezas/form-login/form-login.component';
import { QuienSoyComponent } from '../componentes/pantallas/quien-soy/quien-soy.component';
import { JuegoAnagramaComponent } from '../componentes/juegos/juego-anagrama/juego-anagrama.component';
import { ListadoAnagramaComponent } from '../componentes/piezas/listado-anagrama/listado-anagrama.component';
import { GuardService } from '../servicios/guard.service';
import { AuthService } from '../servicios/auth.service';

const Ruteo: Routes = [
  { path: '', component: InicioComponent, runGuardsAndResolvers: 'always' },
  { path: 'Login', component: FormLoginComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'QuienSoy', component: QuienSoyComponent },
  {
    path: 'Juegos', component: MenuJuegosComponent
  },
  {
    path: 'Juego', component: JuegoComponent,
    children: [
      { path: 'Adivina', component: JuegoAdivinaComponent },
      { path: 'Agilidad', component: JuegoAgilidadComponent },
      { path: 'PPT', component: JuegoPptComponent },
      { path: 'Anagrama', component: JuegoAnagramaComponent }
    ]
  },
  {
    path: 'Listado', component: ListadoComponent,
    canActivate: [
      GuardService
    ],
    children: [
      { path: 'Jugadores', component: ListadoJugadoresComponent },
      { path: 'Adivina', component: ListadoAdivinaComponent },
      { path: 'Agilidad', component: ListadoAgilidadComponent },
      { path: 'PPT', component: ListadoPptComponent },
      { path: 'Anagrama', component: ListadoAnagramaComponent },
      { path: 'Downasaur', component: ListadoDownasaurComponent }
    ]
  },
  {
    path: 'Configuracion', component: ConfiguracionComponent,
    canActivate: [
      GuardService
    ]
  },
  {
    path: 'ListadoJugadores', component: ListadoJugadoresComponent,
    canActivate: [
      GuardService
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      Ruteo,
      { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthService,
    GuardService
  ]
})

export class RuteoModule { }
