import { TestBed } from '@angular/core/testing';

import { InterationsService } from './interations.service';

describe('InterationsService', () => {
  let service: InterationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
