import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'feed/:id',
    loadChildren: () => import('./feed/feed.routes').then((m) => m.FEED_ROUTES),
  },
];
