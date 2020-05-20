import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo43Component } from './diapo43.component';

describe('Diapo43Component', () => {
  let component: Diapo43Component;
  let fixture: ComponentFixture<Diapo43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
