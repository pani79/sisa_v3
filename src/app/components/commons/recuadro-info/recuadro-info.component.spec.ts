import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuadroInfoComponent } from './recuadro-info.component';

describe('RecuadroInfoComponent', () => {
  let component: RecuadroInfoComponent;
  let fixture: ComponentFixture<RecuadroInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuadroInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuadroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
