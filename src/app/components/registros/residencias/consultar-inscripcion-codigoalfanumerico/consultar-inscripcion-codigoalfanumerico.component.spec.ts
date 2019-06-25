import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInscripcionCodigoalfanumericoComponent } from './consultar-inscripcion-codigoalfanumerico.component';

describe('ConsultarInscripcionCodigoalfanumericoComponent', () => {
  let component: ConsultarInscripcionCodigoalfanumericoComponent;
  let fixture: ComponentFixture<ConsultarInscripcionCodigoalfanumericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarInscripcionCodigoalfanumericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarInscripcionCodigoalfanumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
