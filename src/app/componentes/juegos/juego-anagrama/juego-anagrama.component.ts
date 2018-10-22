import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { JuegoAnagrama } from 'src/app/clases/juego-anagrama';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-juego-anagrama',
  templateUrl: './juego-anagrama.component.html',
  styleUrls: ['./juego-anagrama.component.css']
})
export class JuegoAnagramaComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: Jugador;

  nuevoJuego: JuegoAnagrama;
  palabraIngresada: string;

  intentos: number;

  mensaje: string;
  ayuda: string;

  start: boolean;

  constructor(paisesService: PaisesService) {
    if (this.jugador == null || this.jugador == undefined)
      this.jugador = new Jugador();
    this.nuevoJuego = new JuegoAnagrama("Anagrama", this.jugador.nombre, this.jugador.gano, paisesService);
    this.nuevaPartida();
  }

  ngOnInit() { }

  nuevaPartida() {
    this.intentos = 0;
    this.palabraIngresada = "";
    this.start = false;
  }

  GenerarAnagrama() {
    this.nuevoJuego.GenerarAnagrama();
    this.start = true;
  }

  Verificar() {
    this.intentos++;
    this.nuevoJuego.palabraIngresada = this.palabraIngresada;
    if (this.nuevoJuego.check()) {
      this.MostrarMensaje("Ganaste!!!", true);
      this.nuevaPartida();
    }
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
}
