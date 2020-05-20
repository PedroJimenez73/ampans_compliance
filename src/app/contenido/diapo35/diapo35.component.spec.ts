import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo35Component } from './diapo35.component';

describe('Diapo35Component', () => {
  let component: Diapo35Component;
  let fixture: ComponentFixture<Diapo35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
