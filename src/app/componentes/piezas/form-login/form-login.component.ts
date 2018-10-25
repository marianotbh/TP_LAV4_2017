import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  mensaje;

  constructor(public activeModal: NgbActiveModal, private usuariosService: UsuariosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  Login(email, password) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.usuariosService.Login(email.value, password.value).subscribe(data => {
      if (data.Estado == "OK") {
        localStorage.setItem("token", data.Token);
        location.reload();
      }
      else {
        this.mensaje = data.Mensaje;
      }
    })
  }
}
