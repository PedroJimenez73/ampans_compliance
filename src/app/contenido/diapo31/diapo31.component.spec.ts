import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo31Component } from './diapo31.component';

describe('Diapo31Component', () => {
  let component: Diapo31Component;
  let fixture: ComponentFixture<Diapo31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
