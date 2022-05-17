import { TestBed } from '@angular/core/testing';

import { MyticketService } from './myticket.service';

describe('MyticketService', () => {
  let service: MyticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
