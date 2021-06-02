import { TestBed } from '@angular/core/testing';

import { BasePluginService } from './base-plugin.service';

describe('BasePluginService', () => {
  let service: BasePluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasePluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
