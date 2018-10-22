import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;

    constructor(nombre: string = "Adivina el Número", jugador: string = "Invitado", gano: boolean = false) {
        super(nombre, jugador, gano);
    }

    public GenerarNumeroSecreto() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }

    public check(): boolean {
        if (this.numeroIngresado == this.numeroSecreto)
            this.gano = true;
        if (this.gano)
            return true;
        else
            return false;
    }

    public help(): string {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    }
}
