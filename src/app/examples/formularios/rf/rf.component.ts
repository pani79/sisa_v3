import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  _infoPaginacabecera: string[] = [
    null,
    'Reactive Form',
    'mod_developer',
    'askeletor',
    null
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
