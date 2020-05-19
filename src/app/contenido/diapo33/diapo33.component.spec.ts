import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo33Component } from './diapo33.component';

describe('Diapo33Component', () => {
  let component: Diapo33Component;
  let fixture: ComponentFixture<Diapo33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
