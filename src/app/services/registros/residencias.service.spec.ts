import { TestBed, inject } from '@angular/core/testing';

import { ResidenciasService } from './residencias.service';

describe('ResidenciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResidenciasService]
    });
  });

  it('should be created', inject([ResidenciasService], (service: ResidenciasService) => {
    expect(service).toBeTruthy();
  }));
});
