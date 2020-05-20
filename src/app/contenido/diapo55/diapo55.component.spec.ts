import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo55Component } from './diapo55.component';

describe('Diapo55Component', () => {
  let component: Diapo55Component;
  let fixture: ComponentFixture<Diapo55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
