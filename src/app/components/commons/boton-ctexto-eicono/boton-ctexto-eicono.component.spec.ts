import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCTextoEIconoComponent } from './boton-ctexto-eicono.component';

describe('BotonCTextoEIconoComponent', () => {
  let component: BotonCTextoEIconoComponent;
  let fixture: ComponentFixture<BotonCTextoEIconoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCTextoEIconoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCTextoEIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
