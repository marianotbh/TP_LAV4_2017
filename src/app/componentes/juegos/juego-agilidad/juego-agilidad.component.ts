import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { JuegoAgilidad } from 'src/app/clases/juego-agilidad';

@Component({
  selector: 'app-juego-agilidad',
  templateUrl: './juego-agilidad.component.html',
  styleUrls: ['./juego-agilidad.component.css']
})
export class JuegoAgilidadComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: Jugador;

  nuevoJuego: JuegoAgilidad;

  start: boolean;

  mensaje: string;
  ayuda: string;
  contador: number;
  intentos: string;

  constructor() {
    if (this.jugador == null || this.jugador == undefined)
      this.jugador = new Jugador();
    this.nuevoJuego = new JuegoAgilidad("Agilidad y aritmética", this.jugador.nombre, this.jugador.gano);
  }

  GenerarOperacion() {
    this.nuevoJuego.numeroIngresado = 0;
    this.nuevoJuego.GenerarOperacion();
    this.start = true;
    this.contador = 0;
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
    this.contador++;

    if (this.nuevoJuego.check()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostrarMensaje("Sos un Genio!!!", true);
      this.ayuda = "Ganaste!";
      this.nuevoJuego.resultadoOperacion = 0;
    } 
    
    else {
      let mensaje: string;

      this.ayuda = "Ayuda: " + this.nuevoJuego.help();
      this.intentos = "Intentos: " + this.contador;

      this.MostrarMensaje(mensaje);
    }

    console.info("Número Secreto: ", this.nuevoJuego.gano);
  }

  ngOnInit() {
  }

}
