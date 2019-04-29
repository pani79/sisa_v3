import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-commons-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  @Input() infoInput: {
    i_h1: 'hola H1',
    i_h2: 'hola H2',
    i_h3: 'hola H3',
    i_h4: 'hola H4',
    i_h5: 'hola H5',
    i_p: 'hola p',
  };
  constructor() { }

  ngOnInit() {
  }

}
