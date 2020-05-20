import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo54Component } from './diapo54.component';

describe('Diapo54Component', () => {
  let component: Diapo54Component;
  let fixture: ComponentFixture<Diapo54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
