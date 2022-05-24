import { TestBed } from '@angular/core/testing';

import { IgualesService } from './iguales.service';

describe('IgualesService', () => {
  let service: IgualesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgualesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
