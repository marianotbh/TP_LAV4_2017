import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class ArchivosJugadoresService {

  private api = "ApiJugadores";

  constructor(public http: HostService) { }

  public TraerJugadores(): Observable<Array<Jugador>> {
    return this.http.List<Jugador>(this.api);
  }
}
