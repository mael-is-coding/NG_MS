import { TestBed } from '@angular/core/testing';

import { AccentColorChangeService } from './accent-color-change.service';

describe('AccentColorChangeService', () => {
  let service: AccentColorChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccentColorChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
