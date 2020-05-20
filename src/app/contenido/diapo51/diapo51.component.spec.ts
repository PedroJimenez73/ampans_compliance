import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo51Component } from './diapo51.component';

describe('Diapo51Component', () => {
  let component: Diapo51Component;
  let fixture: ComponentFixture<Diapo51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
