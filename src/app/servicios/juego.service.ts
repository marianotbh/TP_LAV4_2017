import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';
import { Juego } from '../clases/juego';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(public http: HostService) { }

  public Listar(juego: string = ""): Observable<Array<Juego>> {
    return this.http.List<Juego>('puntajes').pipe(
      map(data => {
        return (juego != "") ? data.filter(data => data.nombre == juego) : data;
      })
    );
  }

  public Guardar(juego: Juego): Observable<Juego> {
    return this.http.Post<Juego>('puntajes', juego);
  }
}
