import { Juego } from '../clases/juego'

export class JuegoDownasaur extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;

    constructor(nombre: string = "Downasaur", jugador: string = "Invitado", gano: boolean = false) {
        super(nombre, jugador, gano);
    }

    public check(): boolean {
        return true;
    }

    public help(): string {
        return "Hola";
    }
}
