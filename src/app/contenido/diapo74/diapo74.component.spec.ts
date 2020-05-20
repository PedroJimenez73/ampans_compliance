import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo74Component } from './diapo74.component';

describe('Diapo74Component', () => {
  let component: Diapo74Component;
  let fixture: ComponentFixture<Diapo74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
