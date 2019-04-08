import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAltaComponent } from './usuarios-alta.component';

describe('UsuariosAltaComponent', () => {
  let component: UsuariosAltaComponent;
  let fixture: ComponentFixture<UsuariosAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
