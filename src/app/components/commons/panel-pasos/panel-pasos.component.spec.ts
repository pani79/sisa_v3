import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPasosComponent } from './panel-pasos.component';

describe('PanelPasosComponent', () => {
  let component: PanelPasosComponent;
  let fixture: ComponentFixture<PanelPasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
