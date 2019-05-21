
// Devolver estilos

Component({
  selector: 'being-stylish',
  template: `
    <div 
      [style.background-color]="getBackgroundColor()"
      [style.color]="'red'" 
      (click)="showStyle = !showStyle">
      I'm stylish, kinda..
    </div>
  `
})
export class StylishComponent {
  showStyle = false;
  getBackgroundColor() {
    if (this.showStyle) {
      return 'yellow';
    } else {
      return '';
    }
  }
}


// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
// Validar estilos

<div class="nexo_i" [ngClass]="{ colorCompletado: _pasos[i]['completado'] }"></div>

_pasos[i]['completado'] = true;
.colorCompletado{	background-color: #006633 !important; }


3
	
 
<p [style.background-color]="'grey'">some paragraph with grey background</p>

<h1 [class.class-name]="Class Value"></h1>
<h1 [style.style-name]="Style Value"></h1>


<div class="container" [style.display]="_pasoActual === 4 ? 'block': 'none'">