import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNumericoGrupoComponent } from './panel-numerico-grupo.component';

describe('PanelNumericoGrupoComponent', () => {
  let component: PanelNumericoGrupoComponent;
  let fixture: ComponentFixture<PanelNumericoGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNumericoGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNumericoGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
