import { TestBed, inject } from '@angular/core/testing';

import { PreinscripcionServiceDebugService } from './preinscripcion-service-debug.service';

describe('PreinscripcionServiceDebugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreinscripcionServiceDebugService]
    });
  });

  it('should be created', inject([PreinscripcionServiceDebugService], (service: PreinscripcionServiceDebugService) => {
    expect(service).toBeTruthy();
  }));
});
