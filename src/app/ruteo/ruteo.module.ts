import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../componentes/pantallas/inicio/inicio.component';
import { ErrorComponent } from '../componentes/pantallas/error/error.component';
import { RegistroComponent } from '../componentes/pantallas/registro/registro.component';
import { JuegoAdivinaComponent } from '../componentes/juegos/juego-adivina/juego-adivina.component';
import { ListadoAdivinaComponent } from '../componentes/piezas/listado-adivina/listado-adivina.component';
import { JuegoAgilidadComponent } from '../componentes/juegos/juego-agilidad/juego-agilidad.component';
import { ListadoAgilidadComponent } from '../componentes/piezas/listado-agilidad/listado-agilidad.component';
import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';
import { ListadoPptComponent } from '../componentes/piezas/listado-ppt/listado-ppt.component';
import { JuegoDownasaurComponent } from '../componentes/juegos/juego-downasaur/juego-downasaur.component';
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

const Ruteo: Routes = [
  { path: '', component: InicioComponent },  
  { path: 'Login', component: FormLoginComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'QuienSoy', component: QuienSoyComponent },
  { path: 'Juegos', component: MenuJuegosComponent},
  {
    path: 'Juego', component: JuegoComponent,
    children: [
      {
        path: 'Adivina', component: JuegoAdivinaComponent,
        children: [{
          path: 'Listado', component: ListadoAdivinaComponent
        }]
      },
      {
        path: 'Agilidad', component: JuegoAgilidadComponent,
        children: [{
          path: 'Listado', component: ListadoAgilidadComponent
        }]
      },
      {
        path: 'PPT', component: JuegoPptComponent,
        children: [{
          path: 'Listado', component: ListadoPptComponent
        }]
      },
      {
        path: 'Anagrama', component: JuegoAnagramaComponent,
        children: [{
          path: 'Listado', component: ListadoAdivinaComponent
        }]
      }
    ]
  },
  { path: 'Configuracion', component: ConfiguracionComponent },
  { path: 'Listados', component: ListadoComponent },
  { path: 'ListadoJugadores', component: ListadoJugadoresComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(Ruteo)
  ],
  exports: [
    RouterModule
  ]
})

export class RuteoModule { }
