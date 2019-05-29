import { TestBed, inject } from '@angular/core/testing';

import { TdfServicioService } from './tdf-servicio.service';

describe('TdfServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TdfServicioService]
    });
  });

  it('should be created', inject([TdfServicioService], (service: TdfServicioService) => {
    expect(service).toBeTruthy();
  }));
});
