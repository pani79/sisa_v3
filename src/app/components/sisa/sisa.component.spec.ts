import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisaComponent } from './sisa.component';

describe('SisaComponent', () => {
  let component: SisaComponent;
  let fixture: ComponentFixture<SisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
