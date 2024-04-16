import { Routes } from '@angular/router';

export const FEED_ROUTES: Routes = [
  {
    path: '',
    // canActivate: [isValidUser],
    // canDeactivate: [confirmUnsavedReview],
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    loadComponent: () =>
      import('../simple-router-outlet/simple-router-outlet.component').then(
        (m) => m.SimpleRouterOutletComponent
      ),
    children: [
      {
        path: 'red',
        loadComponent: () =>
          import('./feed.component').then((m) => m.FeedComponent),
      },
      {
        path: 'green',
        loadComponent: () =>
          import('./feed.component').then((m) => m.FeedComponent),
      },
      {
        path: 'blue',
        loadComponent: () =>
          import('./feed.component').then((m) => m.FeedComponent),
      },
    ],
  },
  { path: '', redirectTo: '/feed/red', pathMatch: 'full' },
];
