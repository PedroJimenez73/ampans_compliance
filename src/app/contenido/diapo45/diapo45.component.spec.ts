import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo45Component } from './diapo45.component';

describe('Diapo45Component', () => {
  let component: Diapo45Component;
  let fixture: ComponentFixture<Diapo45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
