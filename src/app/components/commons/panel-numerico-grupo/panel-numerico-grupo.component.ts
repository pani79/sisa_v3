import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-commons-panel-numerico-grupo',
  templateUrl: './panel-numerico-grupo.component.html',
  styleUrls: ['./panel-numerico-grupo.component.css']
})
export class PanelNumericoGrupoComponent implements OnInit {

  @Input() registro: {};
  @Input() inputInfoPaneles: {};
  constructor() { }

  ngOnInit() {
  }

}
