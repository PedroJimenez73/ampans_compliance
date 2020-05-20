import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo81Component } from './diapo81.component';

describe('Diapo81Component', () => {
  let component: Diapo81Component;
  let fixture: ComponentFixture<Diapo81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
