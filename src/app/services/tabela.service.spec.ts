import { TestBed, inject } from '@angular/core/testing';

import { TabelaService } from './tabela.service';

describe('TabelaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabelaService]
    });
  });

  it('should be created', inject([TabelaService], (service: TabelaService) => {
    expect(service).toBeTruthy();
  }));
});
