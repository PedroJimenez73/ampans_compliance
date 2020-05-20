import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo66Component } from './diapo66.component';

describe('Diapo66Component', () => {
  let component: Diapo66Component;
  let fixture: ComponentFixture<Diapo66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
