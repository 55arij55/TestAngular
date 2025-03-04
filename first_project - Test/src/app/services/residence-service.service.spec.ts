import { TestBed } from '@angular/core/testing';

import { ResidenceServiceService } from './residence-service.service';

describe('ResidenceServiceService', () => {
  let service: ResidenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
