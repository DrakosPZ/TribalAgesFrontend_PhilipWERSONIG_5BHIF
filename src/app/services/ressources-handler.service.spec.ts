import { TestBed } from '@angular/core/testing';

import { RessourcesHandlerService } from './ressources-handler.service';

describe('RessourcesHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RessourcesHandlerService = TestBed.get(RessourcesHandlerService);
    expect(service).toBeTruthy();
  });
});
