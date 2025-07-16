import { TestBed } from '@angular/core/testing';

import { ZeinService } from './zein.service';

describe('ZeinService', () => {
  let service: ZeinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
