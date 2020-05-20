import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo44Component } from './diapo44.component';

describe('Diapo44Component', () => {
  let component: Diapo44Component;
  let fixture: ComponentFixture<Diapo44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
