import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {
    jug1: number;
    jug2: number;
    vidas: number;

    constructor(nombre: string = "Adivina el Número", jugador: string = "Invitado", gano: boolean = false) {
        super(nombre, jugador, gano);
        this.vidas = 3;
    }

    public MovimientoRival() {
        this.jug2 = Math.floor((Math.random() * 3) + 1);
    }

    public check(): any {
        //1 = Piedra
        //2 = Papel
        //3 = Tijera
        if (this.jug1 == 1 && this.jug2 == 2) {
            this.vidas--;
            return -1;
        }
        else if (this.jug1 == 2 && this.jug2 == 3) {
            this.vidas--;
            return -1;
        }
        else if (this.jug1 == 3 && this.jug2 == 1) {
            this.vidas--;
            return -1;
        }
        else if (this.jug1 == this.jug2) {
            return 0;
        }
        else return 1;
    }

    public help(): string {
        if (this.jug1 == 1)
            return "Piedra vence Tijera, Papel vence Piedra";
        else if (this.jug1 == 2)
            return "Papel vence Piedra, Tijera vence Papel";
        else if (this.jug1 == 3)
            return "Tijera vence Papel, Piedra vence Tijera";
    }
}
