import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo40Component } from './diapo40.component';

describe('Diapo40Component', () => {
  let component: Diapo40Component;
  let fixture: ComponentFixture<Diapo40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
