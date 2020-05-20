import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo76Component } from './diapo76.component';

describe('Diapo76Component', () => {
  let component: Diapo76Component;
  let fixture: ComponentFixture<Diapo76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
