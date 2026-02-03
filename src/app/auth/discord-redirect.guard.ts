import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DOCUMENT } from '@angular/common';

export const discordRedirectGuard: CanActivateFn = (route, state) => {
  const document = inject(DOCUMENT);
  document.location.href = 'https://discord.gg/XpzgtEcBU2'; 
  return false;
};