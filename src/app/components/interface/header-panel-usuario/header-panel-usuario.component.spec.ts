import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPanelUsuarioComponent } from './header-panel-usuario.component';

describe('HeaderPanelUsuarioComponent', () => {
  let component: HeaderPanelUsuarioComponent;
  let fixture: ComponentFixture<HeaderPanelUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPanelUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPanelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
