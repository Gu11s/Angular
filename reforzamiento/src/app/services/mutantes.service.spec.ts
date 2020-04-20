import { TestBed } from '@angular/core/testing';

import { MutantesService } from './mutantes.service';

describe('MutantesService', () => {
  let service: MutantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
