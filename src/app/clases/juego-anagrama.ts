import { Juego } from '../clases/juego';
import { Pais } from './pais';
import { PaisesService } from '../servicios/paises.service';

export class JuegoAnagrama extends Juego {
    paisSecreto: Pais;
    anagramaGenerado: string;
    palabraIngresada: string;
    paises: Array<Pais>;

    constructor(nombre: string = "Anagrama", jugador: string = "Invitado", puntaje: number = 0, private paisesService: PaisesService) {
        super(nombre, jugador, puntaje);
    }

    GenerarAnagrama() {
        console.log(this.paisesService);
        this.paisesService.Listar().subscribe(data => {
            this.paises = data;
            let pais;
            this.paisSecreto = this.paises[Math.floor(Math.random() * this.paises.length) + 1];
            pais = this.paisSecreto.name.split('');
            for (var i = pais.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = pais[i];
                pais[i] = pais[j];
                pais[j] = tmp;
            }
            this.anagramaGenerado = pais.join("");
        });
    }

    public check(): boolean {
        if (this.palabraIngresada == undefined)
            return;
        else if (this.palabraIngresada.toLowerCase() == this.paisSecreto.name.toLowerCase())
            return true;
        else
            return false;
    }

    public help(): string {
        if (this.palabraIngresada != undefined && this.palabraIngresada.toLowerCase() != this.paisSecreto.name.toLowerCase()) {
            return "No es ese!";
        }
    }
}
