import { TestBed } from '@angular/core/testing';

import { ArchivosJugadoresService } from './archivos-jugadores.service';

describe('ArchivosJugadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosJugadoresService = TestBed.get(ArchivosJugadoresService);
    expect(service).toBeTruthy();
  });
});
