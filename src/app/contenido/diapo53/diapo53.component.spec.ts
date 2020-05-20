import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo53Component } from './diapo53.component';

describe('Diapo53Component', () => {
  let component: Diapo53Component;
  let fixture: ComponentFixture<Diapo53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
