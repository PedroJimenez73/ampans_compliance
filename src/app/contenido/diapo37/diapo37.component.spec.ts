import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo37Component } from './diapo37.component';

describe('Diapo37Component', () => {
  let component: Diapo37Component;
  let fixture: ComponentFixture<Diapo37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
