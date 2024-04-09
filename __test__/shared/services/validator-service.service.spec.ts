import { TestBed } from '@angular/core/testing';

import { ValidatorService } from '../../../src/app/shared/services/validator/validator-service.service';

describe('ValidatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidatorService = TestBed.get(ValidatorService);
    expect(service).toBeTruthy();
  });
});
