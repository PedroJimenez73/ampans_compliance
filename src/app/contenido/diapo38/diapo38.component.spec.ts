import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo38Component } from './diapo38.component';

describe('Diapo38Component', () => {
  let component: Diapo38Component;
  let fixture: ComponentFixture<Diapo38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
