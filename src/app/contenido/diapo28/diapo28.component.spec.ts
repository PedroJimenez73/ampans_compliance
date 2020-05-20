import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo28Component } from './diapo28.component';

describe('Diapo28Component', () => {
  let component: Diapo28Component;
  let fixture: ComponentFixture<Diapo28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
