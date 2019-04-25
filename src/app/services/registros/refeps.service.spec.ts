import { TestBed, inject } from '@angular/core/testing';

import { RefepsService } from './refeps.service';

describe('RefepsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefepsService]
    });
  });

  it('should be created', inject([RefepsService], (service: RefepsService) => {
    expect(service).toBeTruthy();
  }));
});
