import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesContenedorComponent } from './homes-contenedor.component';

describe('HomesContenedorComponent', () => {
  let component: HomesContenedorComponent;
  let fixture: ComponentFixture<HomesContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
