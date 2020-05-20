import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo73Component } from './diapo73.component';

describe('Diapo73Component', () => {
  let component: Diapo73Component;
  let fixture: ComponentFixture<Diapo73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
