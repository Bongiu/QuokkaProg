import { TestBed } from '@angular/core/testing';

import { InvioDatiOutputCardService } from './invio-dati-output-card.service';

describe('InvioDatiOutputCardService', () => {
  let service: InvioDatiOutputCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvioDatiOutputCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
