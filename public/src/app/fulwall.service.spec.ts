import { TestBed, inject } from '@angular/core/testing';

import { FulwallService } from './fulwall.service';

describe('FulwallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FulwallService]
    });
  });

  it('should be created', inject([FulwallService], (service: FulwallService) => {
    expect(service).toBeTruthy();
  }));
});
