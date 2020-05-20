import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo61Component } from './diapo61.component';

describe('Diapo61Component', () => {
  let component: Diapo61Component;
  let fixture: ComponentFixture<Diapo61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
