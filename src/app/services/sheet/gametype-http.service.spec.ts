import { TestBed } from '@angular/core/testing';

import { GametypeHttpService } from './gametype-http.service';

describe('GametypeHttpService', () => {
  let service: GametypeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GametypeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
