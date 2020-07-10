/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FatherServiceService } from './father-service.service';

describe('Service: FatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FatherServiceService]
    });
  });

  it('should ...', inject([FatherServiceService], (service: FatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
