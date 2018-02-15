/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GamesDataService } from './games-data.service';

describe('GamesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesDataService]
    });
  });

  it('should ...', inject([GamesDataService], (service: GamesDataService) => {
    expect(service).toBeTruthy();
  }));
});
