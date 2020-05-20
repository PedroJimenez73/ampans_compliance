import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo82Component } from './diapo82.component';

describe('Diapo82Component', () => {
  let component: Diapo82Component;
  let fixture: ComponentFixture<Diapo82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
