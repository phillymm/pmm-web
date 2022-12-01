import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PastEventsComponent } from './pastEvents.component';


describe('pastEventsComponent', () => {
  let component: PastEventsComponent;
  let fixture: ComponentFixture<PastEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
