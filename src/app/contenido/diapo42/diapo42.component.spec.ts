import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo42Component } from './diapo42.component';

describe('Diapo42Component', () => {
  let component: Diapo42Component;
  let fixture: ComponentFixture<Diapo42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
