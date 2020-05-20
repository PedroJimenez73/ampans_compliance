import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo83Component } from './diapo83.component';

describe('Diapo83Component', () => {
  let component: Diapo83Component;
  let fixture: ComponentFixture<Diapo83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
