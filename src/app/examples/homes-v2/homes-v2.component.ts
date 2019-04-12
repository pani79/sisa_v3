import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location/* , LocationStrategy, PathLocationStrategy */ } from '@angular/common';

// Servicios
import { SisaInfoService } from 'src/app/services/sisa-info.service';

@Component({
  selector: 'app-homes-v2',
  templateUrl: './homes-v2.component.html',
  styleUrls: ['./homes-v2.component.css']
})
export class HomesV2Component implements OnInit {

  _ruta: string;
  _registro: string;
  _infoHome = [];

  constructor(
    // private _ruta: Router,
    // private _rutaAct: ActivatedRoute,
    private _rute: ActivatedRoute,
    private _localizacion: Location,
    private _infoService: SisaInfoService,
    private _ruter: Router
  ) {
    _ruter.events.subscribe(val => {
        /* console.log('ruta escritorio = ' + _localizacion.path()); */
      if (_localizacion.path() !== '') {
        this._ruta = _localizacion.path();
        console.log('ruta es = ' + _localizacion.path());
        /* this.configura(); */
      }
    });
  }

  ngOnInit() {
    alert('t');
  }

}
