import { Juego } from '../clases/juego'

export class JuegoAgilidad extends Juego {
    num1: number;
    num2: number;
    operador: string;
    resultadoOperacion: number = 0;
    numeroIngresado = 0;

    constructor(nombre: string = "Adivina el Número", jugador: string = "Invitado", gano: boolean = false) {
        super(nombre, jugador, gano);
    }

    public GenerarOperacion() {
        this.num1 = Math.floor((Math.random() * 10) + 1);
        this.num2 = Math.floor((Math.random() * 10) + 1);
        let operadorAux = Math.floor((Math.random() * 4) + 1);
        switch (operadorAux) {
            case 1:
                this.operador = "+";
                this.resultadoOperacion = this.num1 + this.num2;
                break;
            case 2:
                if ((this.num1 - this.num2) > 0) {
                    this.operador = "-";
                    this.resultadoOperacion = this.num1 - this.num2;
                }
                else {
                    this.operador = "+";
                    this.resultadoOperacion = this.num1 + this.num2;
                }
                break;
            case 3:
                this.operador = "*";
                this.resultadoOperacion = this.num1 * this.num2;
            case 4:
                if ((this.num2 % 2) == 0 && this.num2 < 3) {
                    this.operador = "/";
                    this.resultadoOperacion = this.num1 / this.num2;
                }
                else {
                    this.operador = "+";
                    this.resultadoOperacion = this.num1 + this.num2;
                }
                break;
        }
        this.gano = false;
    }

    public check(): boolean {
        if (this.numeroIngresado == this.resultadoOperacion)
            this.gano = true;
        if (this.gano)
            return true;
        else
            return false;
    }

    public help(): string {
        if (this.numeroIngresado != this.resultadoOperacion) {
            return "Te equivocaste!";
        }
    }
}
