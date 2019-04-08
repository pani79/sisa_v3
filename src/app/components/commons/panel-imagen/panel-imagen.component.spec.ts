import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelImagenComponent } from './panel-imagen.component';

describe('PanelImagenComponent', () => {
  let component: PanelImagenComponent;
  let fixture: ComponentFixture<PanelImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
