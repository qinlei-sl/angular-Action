/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SonService } from './son.service';

describe('Service: Son', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SonService]
    });
  });

  it('should ...', inject([SonService], (service: SonService) => {
    expect(service).toBeTruthy();
  }));
});
