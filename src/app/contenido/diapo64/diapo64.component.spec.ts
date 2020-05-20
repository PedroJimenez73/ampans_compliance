import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo64Component } from './diapo64.component';

describe('Diapo64Component', () => {
  let component: Diapo64Component;
  let fixture: ComponentFixture<Diapo64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
