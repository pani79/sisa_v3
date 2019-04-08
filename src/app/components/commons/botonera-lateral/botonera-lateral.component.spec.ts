import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraLateralComponent } from './botonera-lateral.component';

describe('BotoneraLateralComponent', () => {
  let component: BotoneraLateralComponent;
  let fixture: ComponentFixture<BotoneraLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
