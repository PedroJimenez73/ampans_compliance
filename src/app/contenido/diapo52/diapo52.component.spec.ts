import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo52Component } from './diapo52.component';

describe('Diapo52Component', () => {
  let component: Diapo52Component;
  let fixture: ComponentFixture<Diapo52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
