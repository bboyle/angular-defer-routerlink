import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'feed/:id',
    loadComponent: () =>
      import('./feed/feed.component').then((m) => m.FeedComponent),
  },
];
