import { TestBed } from '@angular/core/testing';

import { AfinidadeService } from './afinidade.service';

describe('AfinidadeService', () => {
  let service: AfinidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfinidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
