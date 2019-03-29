import { TestBed } from '@angular/core/testing';

import { IxtradingService } from './ixtrading.service';

describe('IxtradingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IxtradingService = TestBed.get(IxtradingService);
    expect(service).toBeTruthy();
  });
});
