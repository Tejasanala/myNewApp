import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  const auth = !!localStorage.getItem('token');

  if (!auth) {
    router.navigate(['/login']);
  }

  return auth;
};
