import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToPhillyComponent } from './new-to-philly.component';

describe('NewToPhillyComponent', () => {
  let component: NewToPhillyComponent;
  let fixture: ComponentFixture<NewToPhillyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewToPhillyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToPhillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
