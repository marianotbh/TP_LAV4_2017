import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  public miEdad: number;
  private fechaNacimiento: Date = new Date(1996, 2, 4);

  constructor() { }

  ngOnInit() {
    if (this.fechaNacimiento) {
      var dif = Math.abs(Date.now() - this.fechaNacimiento.valueOf());
      this.miEdad = Math.floor((dif / (1000 * 3600 * 24)) / 365);
    }
  }
}
