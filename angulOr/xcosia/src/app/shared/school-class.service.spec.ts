import { TestBed } from '@angular/core/testing';

import { SchoolClassService } from './school-class.service';

describe('SchoolClassService', () => {
  let service: SchoolClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
