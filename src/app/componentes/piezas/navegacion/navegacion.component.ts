import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  Login() {
    const modalRef = this.modalService.open(FormLoginComponent, { windowClass: 'modal-center' });
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
