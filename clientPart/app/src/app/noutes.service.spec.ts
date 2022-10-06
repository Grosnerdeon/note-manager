import { TestBed } from '@angular/core/testing';

import { NoutesService } from './noutes.service';

describe('NoutesService', () => {
  let service: NoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
