import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {

  usuarios: Array<Usuario>;

  usuariosService: UsuariosService

  constructor(usuariosService: UsuariosService) {
    this.usuariosService = usuariosService;
  }

  ngOnInit() {
    this.usuariosService.ListarUsuarios().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }
}
