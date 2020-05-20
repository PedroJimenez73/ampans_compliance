import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo72Component } from './diapo72.component';

describe('Diapo72Component', () => {
  let component: Diapo72Component;
  let fixture: ComponentFixture<Diapo72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
