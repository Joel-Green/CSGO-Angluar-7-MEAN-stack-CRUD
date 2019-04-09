import { TestBed } from '@angular/core/testing';

import { UpdatepageService } from './updatepage.service';

describe('UpdatepageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatepageService = TestBed.get(UpdatepageService);
    expect(service).toBeTruthy();
  });
});
