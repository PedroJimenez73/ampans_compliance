import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo79Component } from './diapo79.component';

describe('Diapo79Component', () => {
  let component: Diapo79Component;
  let fixture: ComponentFixture<Diapo79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
