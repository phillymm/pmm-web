import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramProposalComponent } from './programproposal.component';

describe('pmm50Component', () => {
  let component: ProgramProposalComponent;
  let fixture: ComponentFixture<ProgramProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
