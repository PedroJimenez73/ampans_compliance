import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo56Component } from './diapo56.component';

describe('Diapo56Component', () => {
  let component: Diapo56Component;
  let fixture: ComponentFixture<Diapo56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
