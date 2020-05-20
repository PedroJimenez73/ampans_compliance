import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo58Component } from './diapo58.component';

describe('Diapo58Component', () => {
  let component: Diapo58Component;
  let fixture: ComponentFixture<Diapo58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
