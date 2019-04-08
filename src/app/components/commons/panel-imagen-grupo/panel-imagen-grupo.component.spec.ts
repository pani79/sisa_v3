import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelImagenGrupoComponent } from './panel-imagen-grupo.component';

describe('PanelImagenGrupoComponent', () => {
  let component: PanelImagenGrupoComponent;
  let fixture: ComponentFixture<PanelImagenGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelImagenGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelImagenGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
