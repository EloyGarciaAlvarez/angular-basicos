import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]  

  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje( nuevoPersonaje: Personaje){
    console.log("Agregando");
    if(this.personajes.some(pers => pers.nombre === nuevoPersonaje.nombre)){
      return
    }
    this.personajes.push(nuevoPersonaje);
  }

  // Esto es una inyección de dependencias.
  // Estamos inyectando el servicio DbzServie al componente MainPageComponent.
  constructor(private dbzService:DbzService){

  }
}
