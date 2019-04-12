import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesV2Component } from './homes-v2.component';

describe('HomesV2Component', () => {
  let component: HomesV2Component;
  let fixture: ComponentFixture<HomesV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
