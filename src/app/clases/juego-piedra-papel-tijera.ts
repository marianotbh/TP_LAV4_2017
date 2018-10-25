import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {
    jug1: number;
    jug2: number;

    constructor(nombre: string = "Piedra, Papel o Tijera", jugador: string = "Invitado", puntaje: number = 0) {
        super(nombre, jugador, puntaje);
    }

    public MovimientoRival() {
        this.jug2 = Math.floor((Math.random() * 3) + 1);
    }

    public check(): any {
        //1 = Piedra
        //2 = Papel
        //3 = Tijera
        if (this.jug1 == 1 && this.jug2 == 2) {
            return -1;
        }
        else if (this.jug1 == 2 && this.jug2 == 3) {
            return -1;
        }
        else if (this.jug1 == 3 && this.jug2 == 1) {
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
