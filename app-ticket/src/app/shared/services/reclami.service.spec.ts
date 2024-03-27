import { TestBed } from '@angular/core/testing';

import { ReclamiService } from './reclami.service';

describe('ReclamiService', () => {
  let service: ReclamiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
