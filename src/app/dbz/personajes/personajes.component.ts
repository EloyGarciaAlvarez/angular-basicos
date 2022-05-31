import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Los personajes vienen desde el componente padre, desde el html.
  
  @Input() listaPersonajes:Personaje[]=[];
  

  // Inyección de dependencia del servio DbzService al componente
  // PersonajesComponent. El servicio es un singleton.
  constructor(private dbzService:DbzService){

  }

}
