import { TestBed, inject } from '@angular/core/testing';

import { SisaServicioService } from './sisa-servicio.service';

describe('SisaServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SisaServicioService]
    });
  });

  it('should be created', inject([SisaServicioService], (service: SisaServicioService) => {
    expect(service).toBeTruthy();
  }));
});
