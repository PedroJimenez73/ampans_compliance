import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo70Component } from './diapo70.component';

describe('Diapo70Component', () => {
  let component: Diapo70Component;
  let fixture: ComponentFixture<Diapo70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
