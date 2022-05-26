import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  /* OutPut Decorador para eventos de salida que pueden ser capturados en el padre */
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  
  
  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length == 0){
      return;
    }

    // Emisión del evento.
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    
    this.nuevoPersonaje = {
      nombre:'',
      poder:0
    }
    
  }
}
