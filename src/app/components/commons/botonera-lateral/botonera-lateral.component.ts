import { Component, OnInit, Input } from '@angular/core';
import { SisaInfoService } from 'src/app/services/sisa-info.service';

@Component({
  selector: 's-commons-botonera-lateral',
  templateUrl: './botonera-lateral.component.html',
  styleUrls: ['./botonera-lateral.component.css']
})
export class BotoneraLateralComponent implements OnInit {

  @Input() idBotonera: string;

  temp = 'askeletor';
  solapas: any[];

  constructor(private _infoservice: SisaInfoService) { }

  ngOnInit() {  this.configura(this.idBotonera); }

  configura(idPasada: string) {
    console.log('-> configuro BotoneraLateralComponent con: ' + idPasada);
    let tipo: string = idPasada.substring(0, 5);
    let id: string = idPasada.substring(6, 10);
    
    console.log('-> he obtenido: ' + tipo + ' // ' + id);
  }

}
