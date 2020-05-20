import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo34Component } from './diapo34.component';

describe('Diapo34Component', () => {
  let component: Diapo34Component;
  let fixture: ComponentFixture<Diapo34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
