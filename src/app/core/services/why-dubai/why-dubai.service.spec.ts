import { TestBed } from '@angular/core/testing';

import { WhyDubaiService } from './why-dubai.service';

describe('WhyDubaiService', () => {
  let service: WhyDubaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhyDubaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
