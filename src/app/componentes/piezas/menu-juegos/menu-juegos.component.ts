import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})

export class MenuJuegosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juego/Adivina']);
        break;
      case 'AdivinaListado':
        this.router.navigate(['/Juego/Adivina/Listado']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juego/Agilidad']);
        break;
      case 'AgilidadListado':
        this.router.navigate(['/Juego/Agilidad/Listado']);
        break;
      case 'PPT':
        this.router.navigate(['/Juego/PPT']);
        break;
      case 'PPTListado':
        this.router.navigate(['/Juego/PPT/Listado']);
        break;
      case 'Anagrama':
        this.router.navigate(['/Juego/Anagrama']);
        break;
      case 'AnagramaListado':
        this.router.navigate(['/Juego/Anagrama/Listado']);
        break;
      case 'Downasaur':
        this.router.navigate(['/Juego/Downasaur']);
        break;
      case 'DownasaurListado':
        this.router.navigate(['/Juego/Downasaur/Listado']);
        break;
      default:
        this.router.navigate(['/Juegos']);
    }
  }
}
