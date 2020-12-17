import { TestBed } from '@angular/core/testing';

import { NoteWithDateService } from './note-with-date.service';

describe('NoteWithDateService', () => {
  let service: NoteWithDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteWithDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
