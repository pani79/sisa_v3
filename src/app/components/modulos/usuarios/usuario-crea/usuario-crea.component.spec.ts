import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCreaComponent } from './usuario-crea.component';

describe('UsuarioCreaComponent', () => {
  let component: UsuarioCreaComponent;
  let fixture: ComponentFixture<UsuarioCreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
