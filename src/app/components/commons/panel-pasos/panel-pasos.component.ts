import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-commons-panel-pasos',
  templateUrl: './panel-pasos.component.html',
  styleUrls: ['./panel-pasos.component.css']
})
export class PanelPasosComponent implements OnInit {

  @Input() infoInput: any[];
  @Output() salida: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
