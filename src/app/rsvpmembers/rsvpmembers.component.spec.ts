import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RsvpMembersComponent } from './rsvpmembers.component';

describe('pmm50Component', () => {
  let component: RsvpMembersComponent;
  let fixture: ComponentFixture<RsvpMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
