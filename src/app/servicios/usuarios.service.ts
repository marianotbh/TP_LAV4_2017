import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private host: HostService) { }

  Login(mail: string, password: string): Observable<any> {
    return this.host.Post<any>('login', { 'name': mail, 'password': password });
  }

  Logout() {
    if (localStorage.getItem('token') != null)
      localStorage.removeItem('token');
  }

  SignUp(formData: any): Observable<Usuario> {
    let options = {
      headers: new HttpHeaders({
        "ContentType": undefined
      })
    }
    return this.host.Post<Usuario>('registro', formData, options);
  }

  ListarUsuarios(): Observable<Array<Usuario>> {
    return this.host.List<Usuario>('usuarios');
  }
}
