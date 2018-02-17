import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVideoComponent } from './photo-video.component';

describe('PhotoVideoComponent', () => {
  let component: PhotoVideoComponent;
  let fixture: ComponentFixture<PhotoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
