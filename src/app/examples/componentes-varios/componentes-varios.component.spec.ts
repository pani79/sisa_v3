import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesVariosComponent } from './componentes-varios.component';

describe('ComponentesVariosComponent', () => {
  let component: ComponentesVariosComponent;
  let fixture: ComponentFixture<ComponentesVariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesVariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesVariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
