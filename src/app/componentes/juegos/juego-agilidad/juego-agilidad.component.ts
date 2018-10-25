import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { JuegoAgilidad } from 'src/app/clases/juego-agilidad';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { JuegoService } from 'src/app/servicios/juego.service';

@Component({
  selector: 'app-juego-agilidad',
  templateUrl: './juego-agilidad.component.html',
  styleUrls: ['./juego-agilidad.component.css'],
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
export class JuegoAgilidadComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: string;

  juego: JuegoAgilidad;

  puntaje: number;
  timer: number;
  interval: any;

  start: boolean = false;
  end: boolean = false;
  gano: boolean = false;
  verificando: boolean = false;
  showMessage: boolean = false;
  mensaje: string;


  constructor(private juegoService: JuegoService) {
    this.juego = new JuegoAgilidad("Agilidad y aritmética", this.jugador, this.puntaje);
  }

  Start() {
    this.juego.GenerarOperacion();
    this.juego.numeroIngresado = null;
    this.start = true;
    this.end = false;
    this.puntaje = 0;
    this.showMessage = false;
    this.verificando = false;
    this.timer = 30;
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.end = true;
        clearTimeout(this.interval);
      }
    }, 1000);
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
      this.verificando = true;
      this.gano = this.juego.check();
      if (this.gano)
        this.puntaje++;
      this.showMessage = true;
      this.MostrarMensaje(this.gano ? "Bien!" : this.juego.help(), this.gano).then(value => {
        this.showMessage = <boolean>value;
        this.juego.numeroIngresado = null;
        this.juego.GenerarOperacion();
        this.verificando = false;
      });
    }
  }

  Save() {
    this.juegoService.Guardar(this.juego).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
