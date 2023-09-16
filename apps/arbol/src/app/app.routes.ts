import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'iterations',
    pathMatch: 'full',
  },
  {
    path: 'iterations',
    loadChildren: () =>
      import('./iterations/iteration.module').then((m) => m.IterationModule),
  },
];
