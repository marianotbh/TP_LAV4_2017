import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormLoginComponent } from '../form-login/form-login.component';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  isLoggedIn: boolean;
  userName: string;

  constructor(private modalService: NgbModal, private authService: AuthService, private usuariosService: UsuariosService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.userName = this.authService.getPayload().userName;
    }
  }

  Login() {
    let modalRef = this.modalService.open(FormLoginComponent, { windowClass: 'modal-center' });
  }

  Logout() {
    this.usuariosService.Logout();
    location.reload();
  }
}
