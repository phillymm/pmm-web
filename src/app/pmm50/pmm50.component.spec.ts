import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pmm50Component } from './pmm50.component';

describe('pmm50Component', () => {
  let component: Pmm50Component;
  let fixture: ComponentFixture<Pmm50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pmm50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pmm50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
