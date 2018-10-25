import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;

    constructor(nombre: string = "Adivina el Número", jugador: string = "Invitado", puntaje: number = 0) {
        super(nombre, jugador, puntaje);
    }

    public GenerarNumeroSecreto() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('Número secreto: ' + this.numeroSecreto);
    }

    public check(): boolean {
        if (this.numeroIngresado == this.numeroSecreto)
            return true;
        else
            return false;
    }

    public help(): string {
        if (this.numeroIngresado < this.numeroSecreto)
            return "Falta";
        else
            return "Te pasate";
    }
}
