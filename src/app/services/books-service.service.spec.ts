import { TestBed, inject } from '@angular/core/testing';

import { BooksServiceService } from './books-service.service';

describe('BooksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksServiceService]
    });
  });

  it('should be created', inject([BooksServiceService], (service: BooksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
