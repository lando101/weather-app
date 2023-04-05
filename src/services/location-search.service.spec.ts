/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocationSearchService } from './location-search.service';

describe('Service: LocationSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationSearchService]
    });
  });

  it('should ...', inject([LocationSearchService], (service: LocationSearchService) => {
    expect(service).toBeTruthy();
  }));
});
