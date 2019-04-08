import { Component, OnInit } from '@angular/core';
import { SisaServicioService } from '../../../services/sisa-servicio.service';

@Component({
  selector: 's-interface-shortcutsMenu',
  templateUrl: './shortcuts-menu.component.html',
  styleUrls: ['./shortcuts-menu.component.css']
})
export class ShortcutsMenuComponent implements OnInit {

  solapasLaterales: boolean[] = [false, false, false];
  muestraPPAccesosFrecuentes = false;
  muestraPPInterface = false;
  muestraPPPani = false;
  botones = {
    placeholder: ['boton_neg', 'askeletor', 'No hago nada che'],
    interface: ['boton_general', 'bot_ico_verbarra', 'mostrar/ocultar Interface']
  };


  constructor(private _servicioSisa: SisaServicioService) { }

  ngOnInit() {
  }

  ActivaDesactivaInterface() { this._servicioSisa.InterfaceSisa(); }

  ActivaDesactivaSolapa(solapa: number) {
    console.log('ActivaDesactivaSolapa => ' + solapa);
    /* 
    this.solapasLaterales.forEach(element => {
      console.log(' => ' + element + ' => ');
    });
 */
    for (let index = 0; index < this.solapasLaterales.length; index++) {
      if (index === solapa) {
        this.solapasLaterales[index] = (this.solapasLaterales[index] === true) ? false : true;
      } else { this.solapasLaterales[index] = false;  }
      console.log(' => ' + this.solapasLaterales);
    }
    /* 
      if (solapa === 1) {
        // classify = (input > 0) ? "positive" : "negative";
        this.muestraPPAccesosFrecuentes = (this.muestraPPAccesosFrecuentes === true) ? false : true;
        console.log('1 => ' + this.muestraPPAccesosFrecuentes);
      } else if (solapa === 2) {
        if (this.muestraPPInterface === true) { this.muestraPPInterface = false; } else{ this.muestraPPInterface = true; }
      } else if (solapa === 3) {
        if (this.muestraPPPani === true) { this.muestraPPPani = false; } else{ this.muestraPPPani = true; }
      }
     */
  }

}
