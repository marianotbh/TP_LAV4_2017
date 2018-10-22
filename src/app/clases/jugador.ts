export class Jugador {
    public nombre: string;
    public gano: boolean;

    constructor(nombre:string = "Invitado", gano:boolean = false) {
        this.nombre = nombre;
        this.gano = gano;
    }
}