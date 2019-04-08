import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-commons-botonera-lateral',
  templateUrl: './botonera-lateral.component.html',
  styleUrls: ['./botonera-lateral.component.css']
})
export class BotoneraLateralComponent implements OnInit {

  @Input() idBotonera: number;
  
  temp = 'askeletor';
  
  constructor() { }

  ngOnInit() {
  }

}
