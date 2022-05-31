import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{


  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder: 1000
  }

  

  

  // Esto es una inyección de dependencias.
  // Estamos inyectando el servicio DbzServie al componente MainPageComponent.
  constructor(){}
}
