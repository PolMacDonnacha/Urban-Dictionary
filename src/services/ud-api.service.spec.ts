import { TestBed } from '@angular/core/testing';

import { UdApiService } from './ud-api.service';

describe('UdApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UdApiService = TestBed.get(UdApiService);
    expect(service).toBeTruthy();
  });
});
