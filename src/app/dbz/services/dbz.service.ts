import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{
    private _personajes:Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];
      
    // Devuelve el array de personajes. NO lo hace por referencia.
    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(personajeNuevo: Personaje){
        this._personajes.push(personajeNuevo);
    }
}