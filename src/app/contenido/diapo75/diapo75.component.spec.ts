import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo75Component } from './diapo75.component';

describe('Diapo75Component', () => {
  let component: Diapo75Component;
  let fixture: ComponentFixture<Diapo75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
