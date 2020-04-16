import { TestBed } from '@angular/core/testing';

import { DbFakeService } from './db-fake.service';

describe('DbFakeService', () => {
  let service: DbFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
