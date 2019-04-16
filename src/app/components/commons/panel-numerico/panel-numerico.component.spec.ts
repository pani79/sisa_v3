import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNumericoComponent } from './panel-numerico.component';

describe('PanelNumericoComponent', () => {
  let component: PanelNumericoComponent;
  let fixture: ComponentFixture<PanelNumericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNumericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
