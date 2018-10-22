import { Juego } from '../clases/juego';
import { Pais } from './pais';
import { PaisesService } from '../servicios/paises.service';

export class JuegoAnagrama extends Juego {
    paisSecreto: Pais;
    anagramaGenerado: string;
    palabraIngresada: string;
    paises: Array<Pais>;
    paisesService: PaisesService;

    constructor(nombre: string = "Anagrama", jugador: string = "Invitado", gano: boolean = false, paisesService: PaisesService) {
        super(nombre, jugador, gano);
        this.paisesService = paisesService;
        this.paisesService.Listar().subscribe(data => {
            console.log(data);
            this.paises = data;
        });
    }

    GenerarAnagrama() {
        console.log(this.paises);
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
    }

    public check(): boolean {
        console.log(this.palabraIngresada);
        if (this.palabraIngresada.toLowerCase() == this.paisSecreto.name.toLowerCase())
            this.gano = true;
        if (this.gano)
            return true;
        else
            return false;
    }

    public help(): string {
        if (this.palabraIngresada.toLowerCase() != this.paisSecreto.name.toLowerCase()) {
            return "No es ese!";
        }
    }
}
