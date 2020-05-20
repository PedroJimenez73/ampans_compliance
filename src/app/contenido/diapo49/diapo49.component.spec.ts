import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo49Component } from './diapo49.component';

describe('Diapo49Component', () => {
  let component: Diapo49Component;
  let fixture: ComponentFixture<Diapo49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
