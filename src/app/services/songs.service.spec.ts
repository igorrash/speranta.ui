import { TestBed } from '@angular/core/testing';

import { SongsService } from './songs.service';

describe('MainServiceService', () => {
  let service: SongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
