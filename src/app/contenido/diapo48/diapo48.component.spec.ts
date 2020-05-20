import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo48Component } from './diapo48.component';

describe('Diapo48Component', () => {
  let component: Diapo48Component;
  let fixture: ComponentFixture<Diapo48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
