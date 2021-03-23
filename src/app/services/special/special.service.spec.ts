import { TestBed } from '@angular/core/testing';

import { SpecialService } from './special.service';

describe('SpecialService', () => {
  let service: SpecialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
