import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormLoginComponent } from '../form-login/form-login.component';
import { TerminosYCondicionesComponent } from '../terminos-y-condiciones/terminos-y-condiciones.component';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  mensaje;
  selectedFile: File;

  constructor(private usuariosService: UsuariosService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['mariano', [Validators.required]],
      email: ['mail@mail', [Validators.required, Validators.email]],
      password: ['123123123', [Validators.required, Validators.minLength(6)]],
      password2: ['123123123', [Validators.required, this.pwMatch]],
      aceptatyc: ['true', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  pwMatch(input: FormControl) {
    if (input.root.get('password') == null) {
      return null;
    }
    let verificar = input.root.get('password').value === input.value;
    return verificar ? null : { mismaClave: true };
  }

  onFileChange(input) {
    this.selectedFile = input.target.files[0]
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var $avatar = document.getElementById('avatar');
        $avatar.innerHTML = "<img src='" + e.target.result + "' style='max-width:100%'>";
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  }

  Register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    let nuevoUsuario = new FormData();

    nuevoUsuario.append("name", this.registerForm.value.name);
    nuevoUsuario.append("mail", this.registerForm.value.email);
    nuevoUsuario.append("password", this.registerForm.value.password);
    nuevoUsuario.append("role", "user");
    nuevoUsuario.append("avatar", this.selectedFile);

    console.log(nuevoUsuario);

    this.usuariosService.SignUp(nuevoUsuario).subscribe(data => {
      console.log(data);
    })
  }

  Login() {
    let modalRef = this.modalService.open(FormLoginComponent);
  }

  TerminosYCondiciones() {
    let modalRef = this.modalService.open(TerminosYCondicionesComponent);
  }

}
