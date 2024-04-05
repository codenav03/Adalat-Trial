import { TestBed } from '@angular/core/testing';

import { ClistService } from './clist.service';

describe('ClistService', () => {
  let service: ClistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
