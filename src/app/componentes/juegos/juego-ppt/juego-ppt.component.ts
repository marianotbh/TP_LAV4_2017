import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from 'src/app/clases/juego-piedra-papel-tijera';
import { Jugador } from 'src/app/clases/jugador';

@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css']
})
export class JuegoPptComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: Jugador;

  nuevoJuego: JuegoPiedraPapelTijera;

  ronda: number;
  gano: number;

  mensaje: string;
  ayuda: string;

  start: boolean;

  constructor() {
    if (this.jugador == null || this.jugador == undefined)
      this.jugador = new Jugador();
    this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera", this.jugador.nombre, this.jugador.gano);
    this.nuevaPartida();
  }

  ngOnInit() {}

  nuevaPartida() {
    this.ronda = 1;
    this.nuevoJuego.vidas = 3;
    this.start = false;
    this.gano = 0;
  }

  Jugada(movimiento: number) {
    this.nuevoJuego.MovimientoRival();

    this.nuevoJuego.jug1 = movimiento;

    this.Verificar();
  }

  MostrarMensaje(mensaje: string = "Mensaje", ganador: boolean = false) {
    this.mensaje = mensaje;
    var snackbar = document.getElementById("snackbar");

    if (ganador) {
      snackbar.className = "d-block bg-success";
    } else {
      snackbar.className = "d-block bg-warning";
    }
    setTimeout(function () {
      snackbar.className = snackbar.className.replace("d-block", "d-none");
    }, 3000);
  }

  Verificar() {
    if (this.ronda <= 5) {
      if (this.nuevoJuego.check() == 1) {
        this.gano++;
        if (this.gano == 3 && this.ronda <= 5) {
          this.enviarJuego.emit(this.nuevoJuego);
          this.MostrarMensaje("Bien ahí!", true);
          this.ayuda = "Ganaste!";
          this.nuevaPartida();
        }
        else if (this.ronda == 5 && this.gano > 3) {
          let mensaje: string = "Perdiste! se te acabaron los intentos!!";
          this.ayuda = "Perdiste";
          this.MostrarMensaje(mensaje);
          this.nuevaPartida();
        }
        else {
          this.MostrarMensaje("Seguí así!", true);
          this.ayuda = "Bien!";
        }
      }
      else if (this.nuevoJuego.check() == -1) {
        if (this.nuevoJuego.vidas > 0) {
          let mensaje: string = "Perdiste! pero ánimo todavía te quedan " + this.nuevoJuego.vidas + " vidas y " + (5 - this.ronda) + " intentos";
          this.ayuda = "Ayuda: " + this.nuevoJuego.help();
          this.MostrarMensaje(mensaje);
        }
        else {
          let mensaje: string = "Perdiste! ya no te quedan más vidas!!";
          this.ayuda = "Perdiste";
          this.MostrarMensaje(mensaje);
          this.nuevaPartida();
        }
      }
    }

    if (this.ronda < 5) {
      this.ronda++;
    }
  }

  parseMovimiento(mov: number) {
    switch (mov) {
      case 1:
        return "Piedra";
      case 2:
        return "Papel";
      case 3:
        return "Tijera";
    }
  }
}
