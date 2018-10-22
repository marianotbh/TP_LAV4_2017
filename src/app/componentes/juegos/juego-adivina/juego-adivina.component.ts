import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { JuegoAdivina } from '../../../clases/juego-adivina';
import { Jugador } from 'src/app/clases/jugador';

@Component({
  selector: 'app-juego-adivina',
  templateUrl: './juego-adivina.component.html',
  styleUrls: ['./juego-adivina.component.css']
})
export class JuegoAdivinaComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: Jugador;

  nuevoJuego: JuegoAdivina;

  numeroSecretoGenerado: boolean;

  mensaje: string;
  ayuda: string;
  contador: number;
  intentos: string;

  constructor() {
    if (this.jugador == null || this.jugador == undefined)
      this.jugador = new Jugador();
    this.nuevoJuego = new JuegoAdivina("Adiviná el número secreto", this.jugador.nombre, this.jugador.gano);
  }

  GenerarNumeroSecreto() {
    this.nuevoJuego.numeroIngresado = 0;
    this.nuevoJuego.GenerarNumeroSecreto();
    this.numeroSecretoGenerado = true;
    this.contador = 0;
  }

  MostrarMensaje(mensaje: string = "Mensaje", ganador: boolean = false) {
    this.mensaje = mensaje;
    var snackbar = document.getElementById("snackbar");

    if (ganador) {
      snackbar.className = "d-block bg-success";
    } 
    else {
      snackbar.className = "d-block bg-warning";
    }

    setTimeout(function () {
      snackbar.className = snackbar.className.replace("d-block", "d-none");
    }, 3000);
  }

  Verificar() {
    this.contador++;

    if (this.nuevoJuego.check()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostrarMensaje("Sos un Genio!!!", true);
      this.ayuda = "Ganaste!";
      this.nuevoJuego.numeroSecreto = 0;
    }
    else {
      let mensaje: string;
      switch (this.contador) {
        case 1:
          mensaje = "No es ése, ánimo! puede que sea el próximo";
          break;
        case 2:
          mensaje = "Mmm... te estarás acercando?";
          break;
        case 3:
          mensaje = "Ese tampoco es, yo creí que la tercera era la vencida";
          break;
        case 4:
          mensaje = "No era el " + this.nuevoJuego.numeroIngresado + ", probá con otro";
          break;
        case 5:
          mensaje = this.contador + " intentos y todavía no, che";
          break;
        case 6:
          mensaje = "Afortunado en el amor...";
          break;
        default:
          mensaje = "Ya erraste " + this.contador + " veces";
          break;
      }

      this.ayuda = "Ayuda: " + this.nuevoJuego.help();
      this.intentos = "Intentos: " + this.contador;

      this.MostrarMensaje(mensaje);
    }

    console.info("Número Secreto: ", this.nuevoJuego.gano);
  }

  ngOnInit() {
  }

}
