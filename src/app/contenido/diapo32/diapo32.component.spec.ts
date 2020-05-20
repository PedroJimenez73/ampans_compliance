import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo32Component } from './diapo32.component';

describe('Diapo32Component', () => {
  let component: Diapo32Component;
  let fixture: ComponentFixture<Diapo32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
