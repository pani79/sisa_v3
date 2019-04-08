import { TestBed, inject } from '@angular/core/testing';

import { SisaInfoService } from './sisa-info.service';

describe('SisaInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SisaInfoService]
    });
  });

  it('should be created', inject([SisaInfoService], (service: SisaInfoService) => {
    expect(service).toBeTruthy();
  }));
});
