import { Component, OnInit, Input, Output , EventEmitter/*, OnChanges, SimpleChange, SimpleChanges */ } from '@angular/core';

//  info
import { PaginasInfo } from 'src/app/data/paginasInfo';

//  servicios
import { SisaInfoService } from 'src/app/services/sisa-info.service';


@Component({
  selector: 's-commons-panelImagenGrupo',
  templateUrl: './panel-imagen-grupo.component.html',
  styleUrls: ['./panel-imagen-grupo.component.css']
})
export class PanelImagenGrupoComponent implements /* OnChanges, */ OnInit {
  @Input() infoPaneles: String[];
  @Output() public salida = new EventEmitter();

  _infoPaneles: any[] = [];

  constructor(private _infoservice: SisaInfoService) { }

  ngOnInit() {
    this.configura();
  }
/* 
  ngOnChanges(changes: SimpleChanges) {
    const infoPaneles: SimpleChange = changes.infoPaneles;
    this._infoPaneles = infoPaneles.currentValue;
    this.configura();
  }
 */
  configura() {
    this.infoPaneles.forEach(element => {
      this._infoPaneles.push(PaginasInfo.panelesDeImagenes[element.toString()]);
    });
  }

  buchon(e: any) {alert('desde grupo => ' + e); }

}
