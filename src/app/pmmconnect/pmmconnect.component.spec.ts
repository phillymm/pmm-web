import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmmconnectComponent } from './pmmconnect.component';

describe('PmmconnectComponent', () => {
  let component: PmmconnectComponent;
  let fixture: ComponentFixture<PmmconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmmconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmmconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
