import { TestBed } from '@angular/core/testing';

import { ModelSheetHttpService } from './model-sheet-http.service';

describe('ModelSheetHttpService', () => {
  let service: ModelSheetHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelSheetHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
