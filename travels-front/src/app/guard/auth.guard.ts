import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("token_angular");
  if(token) return true;
  router.navigate(['login'], {queryParams: {stateUrl: state.url}});
  return false;
};
