import { TestBed, inject } from '@angular/core/testing';

import { PmmDataAccessService } from './pmm-data-access.service';

describe('PmmDataAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmmDataAccessService]
    });
  });

  it('should be created', inject([PmmDataAccessService], (service: PmmDataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
