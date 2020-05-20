import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo62Component } from './diapo62.component';

describe('Diapo62Component', () => {
  let component: Diapo62Component;
  let fixture: ComponentFixture<Diapo62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
