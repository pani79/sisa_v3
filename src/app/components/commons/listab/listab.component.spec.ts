import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabComponent } from './listab.component';

describe('ListabComponent', () => {
  let component: ListabComponent;
  let fixture: ComponentFixture<ListabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
