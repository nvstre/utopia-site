import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { discordRedirectGuard } from './discord-redirect.guard';

describe('discordRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => discordRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
