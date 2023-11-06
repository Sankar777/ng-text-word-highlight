import { TestBed } from '@angular/core/testing';

import { NgTextWordHighlightService } from './ng-text-word-highlight.service';

describe('NgTextWordHighlightService', () => {
  let service: NgTextWordHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTextWordHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
