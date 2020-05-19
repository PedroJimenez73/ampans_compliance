import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo39Component } from './diapo39.component';

describe('Diapo39Component', () => {
  let component: Diapo39Component;
  let fixture: ComponentFixture<Diapo39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
