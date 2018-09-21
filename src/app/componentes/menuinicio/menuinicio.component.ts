import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';
import { Pais } from '../../clases/pais';
@Component({
  selector: 'app-menuinicio',
  templateUrl: './menuinicio.component.html',
  styleUrls: ['./menuinicio.component.css']
})
export class MenuinicioComponent implements OnInit {

  public servicio: PaisesService;
  public paises:Array<Pais> = new Array<Pais>();
  public mostrar:boolean;
  constructor(private mihttp: PaisesService) {
    this.servicio = mihttp;
  }

  Listar() {
    this.servicio.listar().then(
      data => {
        data.forEach(element => {
          this.paises.push(new Pais(element.name, element.population, element.region));
        });
        this.mostrar = true;
      }
    ).catch(
      data => {
        console.log(data);
      }
    );    
  }

  ngOnInit() {
  }

}
