import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-modulos-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @Input() infoInput: {};

  constructor() { }

  ngOnInit() {
  }

}
