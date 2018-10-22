import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';
import { Juego } from '../clases/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private api = 'ApiJuegos';

  constructor(public http: HostService) { }

  public Listar(): Observable<Array<Juego>> {
    return this.http.List<Juego>(this.api);
  }
}
