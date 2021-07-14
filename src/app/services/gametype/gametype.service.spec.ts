import { TestBed } from '@angular/core/testing';

import { GametypeService } from './gametype.service';

describe('GametypeService', () => {
  let service: GametypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GametypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
