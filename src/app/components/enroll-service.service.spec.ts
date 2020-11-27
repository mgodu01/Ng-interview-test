import { TestBed } from '@angular/core/testing';

import { EnrollServiceService } from './enroll-service.service';

describe('EnrollServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollServiceService = TestBed.get(EnrollServiceService);
    expect(service).toBeTruthy();
  });
});
