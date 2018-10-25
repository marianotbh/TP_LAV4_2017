import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { JuegoAnagrama } from 'src/app/clases/juego-anagrama';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pais } from 'src/app/clases/pais';
import { JuegoService } from 'src/app/servicios/juego.service';

@Component({
  selector: 'app-juego-anagrama',
  templateUrl: './juego-anagrama.component.html',
  styleUrls: ['./juego-anagrama.component.css'],
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
export class JuegoAnagramaComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @Input() jugador: string;

  juego: JuegoAnagrama;
  intentos: number;

  start: boolean = false;
  end: boolean = false;
  gano: boolean = false;
  verificando: boolean = false;
  showMessage: boolean = false;
  mensaje: string;

  constructor(private paisesService: PaisesService, private juegoService:JuegoService) {
    this.juego = new JuegoAnagrama("Anagrama", this.jugador, this.intentos, this.paisesService);
  }

  ngOnInit() { }

  Start() {
    this.juego.GenerarAnagrama();
    this.start = true;
    this.end = false;
    this.intentos = 0;
    this.showMessage = false;
    this.verificando = false;
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
        if (this.gano) {
          this.end = true;
        }
      });
    }
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

  Save() {
    this.juegoService.Guardar(this.juego).subscribe(data => {
      console.log(data);
    });
  }
}
