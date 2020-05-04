import { TestBed } from '@angular/core/testing';

import { WordDatabaseService } from './word-database.service';

describe('WordDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordDatabaseService = TestBed.get(WordDatabaseService);
    expect(service).toBeTruthy();
  });
});
