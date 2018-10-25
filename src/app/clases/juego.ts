export abstract class Juego {
    public nombre: string;
    public jugador: string;
    public puntaje: number;

    constructor(nombre: string = "Juego", jugador: string = "Invitado", puntaje: number = 0) {
        this.nombre = nombre;
        this.jugador = jugador;
        this.puntaje = puntaje;
    }

    public abstract check(): boolean;

    public abstract help(): string;
}
