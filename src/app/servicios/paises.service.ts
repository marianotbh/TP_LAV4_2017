import { Injectable, Host } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../clases/pais';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PaisesService {

  constructor(public http: HttpClient) { }

  public Listar(): Observable<Array<Pais>> {
    let resp = this.http.get<Array<Pais>>("https://restcountries.eu/rest/v2/all");
    resp = resp.pipe(
      map(data => {
        return data.filter(pais => pais.region == "Americas" && /^\S+$/g.test(pais.name));
      })
    );
    console.log(resp);
    return resp;
  }
}