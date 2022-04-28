import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmm2022Component } from './bmm2022.component';

describe('Bmm2022Component', () => {
  let component: Bmm2022Component;
  let fixture: ComponentFixture<Bmm2022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bmm2022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bmm2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
