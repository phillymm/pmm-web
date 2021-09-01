import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoSloganComp2021Component } from './logoSloganComp2021.component';

describe('logoSloganComp2021Component', () => {
  let component: LogoSloganComp2021Component;
  let fixture: ComponentFixture<LogoSloganComp2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSloganComp2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSloganComp2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
