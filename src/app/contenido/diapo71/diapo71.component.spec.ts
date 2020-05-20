import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo71Component } from './diapo71.component';

describe('Diapo71Component', () => {
  let component: Diapo71Component;
  let fixture: ComponentFixture<Diapo71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
