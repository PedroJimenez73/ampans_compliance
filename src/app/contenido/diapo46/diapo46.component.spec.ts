import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo46Component } from './diapo46.component';

describe('Diapo46Component', () => {
  let component: Diapo46Component;
  let fixture: ComponentFixture<Diapo46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
