import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NoutesService } from './noutes.service';

describe('NoutesService', () => {
  let service: NoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{
      provide: HttpClient,
      useValue: {}
    }]});
    service = TestBed.inject(NoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
