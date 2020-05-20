import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo50Component } from './diapo50.component';

describe('Diapo50Component', () => {
  let component: Diapo50Component;
  let fixture: ComponentFixture<Diapo50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
