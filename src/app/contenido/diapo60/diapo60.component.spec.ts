import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo60Component } from './diapo60.component';

describe('Diapo60Component', () => {
  let component: Diapo60Component;
  let fixture: ComponentFixture<Diapo60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
