import { TestBed } from '@angular/core/testing';

import { PluginHttpService } from './plugin-http.service';

describe('PluginHttpService', () => {
  let service: PluginHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
