export abstract class Juego {
    public nombre: string;
    public jugador: string;
    public gano: boolean;

    constructor(nombre: string = "Juego", jugador: string = "Invitado", gano: boolean = false) {
        this.nombre = nombre;
        this.gano = gano;
        this.jugador = jugador;
    }

    public abstract check(): boolean;

    public abstract help(): string;
}
