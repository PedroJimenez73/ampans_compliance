import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo65Component } from './diapo65.component';

describe('Diapo65Component', () => {
  let component: Diapo65Component;
  let fixture: ComponentFixture<Diapo65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
