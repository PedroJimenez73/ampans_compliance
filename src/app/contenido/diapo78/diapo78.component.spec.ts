import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo78Component } from './diapo78.component';

describe('Diapo78Component', () => {
  let component: Diapo78Component;
  let fixture: ComponentFixture<Diapo78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
