import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo67Component } from './diapo67.component';

describe('Diapo67Component', () => {
  let component: Diapo67Component;
  let fixture: ComponentFixture<Diapo67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
