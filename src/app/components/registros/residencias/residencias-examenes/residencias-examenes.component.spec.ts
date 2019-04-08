import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenciasExamenesComponent } from './residencias-examenes.component';

describe('ResidenciasExamenesComponent', () => {
  let component: ResidenciasExamenesComponent;
  let fixture: ComponentFixture<ResidenciasExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenciasExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciasExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
