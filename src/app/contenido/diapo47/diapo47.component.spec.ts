import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo47Component } from './diapo47.component';

describe('Diapo47Component', () => {
  let component: Diapo47Component;
  let fixture: ComponentFixture<Diapo47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
