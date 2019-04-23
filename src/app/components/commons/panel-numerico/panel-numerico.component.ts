import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-commons-panel-numerico',
  templateUrl: './panel-numerico.component.html',
  styleUrls: ['./panel-numerico.component.css']
})
export class PanelNumericoComponent implements OnInit {

  @Input() registro: {};
  @Input() info: {};
  constructor() { }

  ngOnInit() {
  }

}
