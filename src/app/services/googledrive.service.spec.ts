import { TestBed, inject } from '@angular/core/testing';

import { GoogledriveService } from './googledrive.service';

describe('GoogledriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogledriveService]
    });
  });

  it('should be created', inject([GoogledriveService], (service: GoogledriveService) => {
    expect(service).toBeTruthy();
  }));
});
