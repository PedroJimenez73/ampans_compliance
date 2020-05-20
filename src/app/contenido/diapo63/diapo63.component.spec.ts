import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo63Component } from './diapo63.component';

describe('Diapo63Component', () => {
  let component: Diapo63Component;
  let fixture: ComponentFixture<Diapo63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
