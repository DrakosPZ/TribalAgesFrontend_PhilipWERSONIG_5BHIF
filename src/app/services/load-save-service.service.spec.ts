import { TestBed } from '@angular/core/testing';

import { LoadSaveServiceService } from './load-save-service.service';

describe('LoadSaveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadSaveServiceService = TestBed.get(LoadSaveServiceService);
    expect(service).toBeTruthy();
  });
});
