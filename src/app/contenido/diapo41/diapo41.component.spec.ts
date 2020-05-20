import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo41Component } from './diapo41.component';

describe('Diapo41Component', () => {
  let component: Diapo41Component;
  let fixture: ComponentFixture<Diapo41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
