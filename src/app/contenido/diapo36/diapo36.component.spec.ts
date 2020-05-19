import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo36Component } from './diapo36.component';

describe('Diapo36Component', () => {
  let component: Diapo36Component;
  let fixture: ComponentFixture<Diapo36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
