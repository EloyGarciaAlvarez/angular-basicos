
/* Creamos un nuevo Componente , en este caso un componente para el Contador .
Para usarlo:
1. Añadimos la etiqueta <app-contador></app-contador> al app.component.html.
2. Añadirmos el nuevo componente al módulo. en app.module.ts, en declarations, añadimos en ContadorComponent.  */


import { Component, ComponentRef } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h2>Componente contador</h2>
        <h3>La base es: {{base}}</h3>
        <!-- Desde el template tenemos acceso a la clase del componente -->
        <button (click)="variarContador(true);"> + {{base}} </button>
        <button (click)="modificarContador('inc');"> + {{base}} </button>
        <button (click)="incrementarContador();"> + {{base}} </button>
        <span>{{contador}}</span>
        <button (click)="contador = contador -base;"> - {{base}} </button>
        <button (click)="modificarContador('dec');"> - {{base}} </button>
        <button (click)="incDecContador(-base);"> - {{base}} </button>
    `,
    styles: ['h2 {color:blue;}']
})

export class ContadorComponent{
  public titulo: string = 'Contador App';
  public contador: number = 0;
  public base: number = 3;

  public incrementarContador=():void=>{
      this.contador+=this.base;
  }

  public incDecContador=(cantidad:number):void=>{
      this.contador+=cantidad;
  }
  public variarContador=(operacion:boolean):void=>{
    operacion?this.contador+=this.base:this.contador-=this.base;
  }
  public modificarContador=(operacion:string)=>{
    operacion=="inc"?this.contador+=this.base:this.contador-=this.base;
  }
}