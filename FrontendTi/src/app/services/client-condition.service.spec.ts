import { TestBed } from '@angular/core/testing';

import { ClientConditionService } from './client-condition.service';

describe('ClientConditionService', () => {
  let service: ClientConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
