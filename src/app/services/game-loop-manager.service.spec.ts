import { TestBed } from '@angular/core/testing';

import { GameLoopManagerService } from './game-loop-manager.service';

describe('GameLoopManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameLoopManagerService = TestBed.get(GameLoopManagerService);
    expect(service).toBeTruthy();
  });
});
