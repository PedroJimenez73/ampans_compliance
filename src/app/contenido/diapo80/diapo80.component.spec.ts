import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo80Component } from './diapo80.component';

describe('Diapo80Component', () => {
  let component: Diapo80Component;
  let fixture: ComponentFixture<Diapo80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
