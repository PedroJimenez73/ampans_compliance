import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo77Component } from './diapo77.component';

describe('Diapo77Component', () => {
  let component: Diapo77Component;
  let fixture: ComponentFixture<Diapo77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
