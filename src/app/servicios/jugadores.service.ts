import { Injectable } from '@angular/core';
import { ArchivosJugadoresService } from './archivos-jugadores.service';
import { Jugador } from '../clases/jugador';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JugadoresService {

  jugadores: any;
  filtrado: any;

  constructor(public jugadoresService: ArchivosJugadoresService) { }

  TraerSolo(filtro: string): Observable<Array<Jugador>> {
    return this.jugadoresService.TraerJugadores().pipe(
      map(data => {
        let ganador: boolean;

        if (filtro == "ganadores") {
          ganador = true;
        }
        else {
          ganador = false;
        }

        return data.filter(data => data.gano === ganador || filtro == "todos");
      })
    );
  }
}
