import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//  info
import { PaginasInfo } from 'src/app/data/paginasInfo';

//  servicios
import { SisaInfoService } from 'src/app/services/sisa-info.service';


@Component({
  selector: 's-commons-panelImagenGrupo',
  templateUrl: './panel-imagen-grupo.component.html',
  styleUrls: ['./panel-imagen-grupo.component.css']
})
export class PanelImagenGrupoComponent implements OnInit {
  @Input() infoPaneles: String[];
  @Output() public salida = new EventEmitter();

  _info: any[] = [];

  constructor(private _infoservice: SisaInfoService) { }

  ngOnInit() {
    /* this._info = ['hola', 'mundo', 'skeletor', 'bestman', 'trap jaw']; */
    
    console.log('ES -----------x-x--x------------' + this.infoPaneles);
    this.infoPaneles.forEach(element => {
      console.log('ES a-----------x-x--x------------' + element);
      this._info.push(PaginasInfo.panelesDeImagenes[element.toString()]);
      
      console.log('ES b-----------x-x--x------------' + this._info);
    });
  }

}
