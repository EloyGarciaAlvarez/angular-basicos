
// Importación del decorador Component de @angular/core
import { Component } from '@angular/core';

/*El argumento del decorador Component es un objeto con varios campos.
selector: es la equita html que representa al componente. En este caso app-root. Podemos ver que se usa en el fichero index.html.
template: La plantilla html del componente.
templateURL: La referencia al archivo html del componente.
styles: Estilos para el componente.
stylesUrls: Array con Referencias ficheros CSS de estilos para el componente.
*/
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
  
})
export class AppComponent {
  
}
