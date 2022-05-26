import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevoPersonaje:Personaje = {
    nombre:'',
    poder: 0
  }

  @Input() listadoPersonajes:Personaje[] = []
  
  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length == 0){
      return;
    }
    if(this.listadoPersonajes.some(p => p.nombre == this.nuevoPersonaje.nombre)){
      return;
    }
    this.listadoPersonajes.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre:'',
      poder:0
    }
    console.log(this.nuevoPersonaje);
  }
}
