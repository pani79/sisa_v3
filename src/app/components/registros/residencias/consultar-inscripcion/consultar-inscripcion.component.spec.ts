import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInscripcionComponent } from './consultar-inscripcion.component';

describe('ConsultarInscripcionComponent', () => {
  let component: ConsultarInscripcionComponent;
  let fixture: ComponentFixture<ConsultarInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
