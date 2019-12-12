import { TestBed } from '@angular/core/testing';

import { DizimistaService } from './dizimista.service';

describe('DizimistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DizimistaService = TestBed.get(DizimistaService);
    expect(service).toBeTruthy();
  });
});
