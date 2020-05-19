import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo29Component } from './diapo29.component';

describe('Diapo29Component', () => {
  let component: Diapo29Component;
  let fixture: ComponentFixture<Diapo29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
