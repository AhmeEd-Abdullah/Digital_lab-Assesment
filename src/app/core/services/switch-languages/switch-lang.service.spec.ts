import { TestBed } from '@angular/core/testing';

import { SwitchLangService } from './switch-lang.service';

describe('SwitchLangService', () => {
  let service: SwitchLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
