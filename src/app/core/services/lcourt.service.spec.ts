import { TestBed } from '@angular/core/testing';

import { LcourtService } from './lcourt.service';

describe('LcourtService', () => {
  let service: LcourtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcourtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
