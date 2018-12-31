import { TestBed } from '@angular/core/testing';

import { FollowersServiceService } from './followers-service.service';

describe('FollowersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowersServiceService = TestBed.get(FollowersServiceService);
    expect(service).toBeTruthy();
  });
});
