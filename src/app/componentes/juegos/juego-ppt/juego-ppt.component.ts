import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from 'src/app/clases/juego-piedra-papel-tijera';
import { JuegoService } from 'src/app/servicios/juego.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css'],
  animations: [
    trigger('popMessage', [
      state('shown', style({
        fontSize: '30px',
        marginTop: '0px',
        opacity: 1,
      })),
      state('hidden', style({
        marginTop: '-100px',
        opacity: 0
      })),
      transition('shown => hidden', [
        animate('0.25s')
      ])
    ])
  ]
})
export class JuegoPptComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: string;

  juego: JuegoPiedraPapelTijera;

  ronda: number;
  vidas: number;

  start: boolean = false;
  end: boolean = false;
  gano: boolean;
  verificando: boolean = false;
  showMessage: boolean = false;
  mensaje: string;

  constructor(private juegoService: JuegoService) {
    this.juego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera", this.jugador, this.vidas);
  }

  ngOnInit() { }

  Start() {
    this.ronda = 1;
    this.vidas = 3;
    this.start = true;
    this.end = false;
    this.gano = false;
  }

  MostrarMensaje(mensaje: string = "", ganador: boolean = false) {
    return new Promise(resolve => {
      this.mensaje = mensaje;
      let viewport = document.getElementById("juego-wrap");
      if (ganador) {
        viewport.classList.add("bg-success");
      } else {
        viewport.classList.add("bg-warning");
      }
      setTimeout(function () {
        if (viewport.classList.contains('bg-success')) {
          viewport.classList.remove('bg-success');
        }
        if (viewport.classList.contains('bg-warning')) {
          viewport.classList.remove('bg-warning');
        }
        resolve(false);
      }, 1000);
    })
  }

  Verificar() {
    if (this.verificando == false) {
      if (this.ronda <= 3) {
        this.gano = this.juego.check() == 1 ? true : false;
        if (this.gano) {
          if (this.ronda == 3 && this.vidas > (this.ronda - this.vidas)) {
            this.MostrarMensaje("Bien ahí!", true);
          }
          else if (this.ronda == 3 && this.vidas < (this.ronda - this.vidas)) {
            this.MostrarMensaje("Perdiste!", false);
          }
          else {
            this.MostrarMensaje(this.gano ? "Seguí así!" : "Ups", true);
          }
        }
        else if (this.juego.check() == -1) {
          this.vidas--;
        }
      }
      else
        this.end = true;
      if (this.ronda < 3)
        this.ronda++;
    }
  }

  Save() {
    this.juegoService.Guardar(this.juego).subscribe(data => {
      console.log(data);
    });
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
