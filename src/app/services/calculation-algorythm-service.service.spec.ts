import { TestBed } from '@angular/core/testing';

import { CalculationAlgorythmServiceService } from './calculation-algorythm-service.service';

describe('CalculationAlgorythmServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationAlgorythmServiceService = TestBed.get(CalculationAlgorythmServiceService);
    expect(service).toBeTruthy();
  });
});
