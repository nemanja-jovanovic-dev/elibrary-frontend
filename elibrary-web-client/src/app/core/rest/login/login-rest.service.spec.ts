import { TestBed } from '@angular/core/testing';

import { UserRestService } from './user-rest.service';

describe('LoginRestService', () => {
  let service: UserRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
