import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormLoginComponent } from '../componentes/piezas/form-login/form-login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private authService: AuthService, private modalService: NgbModal) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn())
      return true;
    else {
      const modalRef = this.modalService.open(FormLoginComponent, { windowClass: 'modal-center' });
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
      return false;
    }
  }
}
