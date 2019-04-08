import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { $ } from 'protractor';

@Component({
  selector: 's-interface-mainMenu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})


export class MainMenuComponent implements OnInit {

  constructor(private _router: Router) {}


  ngOnInit() {
    // document.getElementsByClassName('tooltip').item.tooltip();
    //  document.getElementsByTagName('tooltip').tooltip();

    // $('[data-toggle="tooltip"]').tooltip();
  }

}
