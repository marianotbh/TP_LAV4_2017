import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { JuegoAdivina } from '../../../clases/juego-adivina';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { JuegoService } from 'src/app/servicios/juego.service';

@Component({
  selector: 'app-juego-adivina',
  templateUrl: './juego-adivina.component.html',
  styleUrls: ['./juego-adivina.component.css'],
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
export class JuegoAdivinaComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: string;

  juego: JuegoAdivina;

  numeroSecretoGenerado: boolean;
  intentos: number;

  start: boolean = false;
  end: boolean = false;
  gano: boolean = false;
  verificando: boolean = false;
  showMessage: boolean = false;
  mensaje: string;

  constructor(public juegoService: JuegoService) {
    this.juego = new JuegoAdivina("Adiviná el número secreto", this.jugador, this.intentos);
  }

  Start() {
    this.start = true;
    this.juego.GenerarNumeroSecreto();
    this.end = false;
    this.gano = false;
    this.verificando = false;
    this.showMessage = false;
    this.juego.numeroIngresado = 0;
    this.intentos = 0;
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
    this.intentos++;
    if (this.verificando == false) {
      this.verificando = true;
      this.gano = this.juego.check();
      this.showMessage = true;
      this.MostrarMensaje(this.gano ? "Adivinaste!!!" : this.juego.help(), this.gano).then(value => {
        this.showMessage = <boolean>value;
        this.verificando = <boolean>value;
        this.juego.numeroIngresado = null;
        if (this.gano) {
          this.end = true;
        }
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
