import { Juego } from '../clases/juego';


export class JuegoDownasaur extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;

    constructor(nombre: string = "Downasaur", jugador: string = "Invitado", puntaje: number = 0) {
        super(nombre, jugador, puntaje);
    }

    public Downasaur() {
    }

    public check(): boolean {
        return true;
    }

    public help(): string {
        return "Ayuda";
    }
}
