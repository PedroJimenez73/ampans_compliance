import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo27Component } from './diapo27.component';

describe('Diapo27Component', () => {
  let component: Diapo27Component;
  let fixture: ComponentFixture<Diapo27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
