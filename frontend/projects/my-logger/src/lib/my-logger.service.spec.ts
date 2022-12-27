import { TestBed } from '@angular/core/testing';

import { MyLoggerService } from './my-logger.service';

describe('MyLoggerService', () => {
  let service: MyLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
