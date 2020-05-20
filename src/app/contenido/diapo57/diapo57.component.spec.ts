import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo57Component } from './diapo57.component';

describe('Diapo57Component', () => {
  let component: Diapo57Component;
  let fixture: ComponentFixture<Diapo57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
