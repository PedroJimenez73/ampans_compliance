import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo69Component } from './diapo69.component';

describe('Diapo69Component', () => {
  let component: Diapo69Component;
  let fixture: ComponentFixture<Diapo69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
