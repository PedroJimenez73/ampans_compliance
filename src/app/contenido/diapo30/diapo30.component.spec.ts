import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo30Component } from './diapo30.component';

describe('Diapo30Component', () => {
  let component: Diapo30Component;
  let fixture: ComponentFixture<Diapo30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
