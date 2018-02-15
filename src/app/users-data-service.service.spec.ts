/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersDataServiceService } from './users-data-service.service';

describe('UsersDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersDataServiceService]
    });
  });

  it('should ...', inject([UsersDataServiceService], (service: UsersDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
