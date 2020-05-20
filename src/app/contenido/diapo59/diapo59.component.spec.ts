import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo59Component } from './diapo59.component';

describe('Diapo59Component', () => {
  let component: Diapo59Component;
  let fixture: ComponentFixture<Diapo59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
