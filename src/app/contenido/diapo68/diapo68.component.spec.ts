import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo68Component } from './diapo68.component';

describe('Diapo68Component', () => {
  let component: Diapo68Component;
  let fixture: ComponentFixture<Diapo68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
