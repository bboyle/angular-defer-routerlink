import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./simple-router-outlet/simple-router-outlet.component').then(
        (m) => m.SimpleRouterOutletComponent
      ),
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.routes').then((m) => m.ABOUT_ROUTES),
      },
      {
        path: 'course/:courseID',
        // canActivate: [isValidUser, redirectHandlesToID],
        loadChildren: () =>
          import('./course/course.routes').then((m) => m.COURSE_ROUTES),
      },
      {
        path: 'feed',
        // canActivate: [isValidUser],
        // title: 'Activity Feed',
        loadChildren: () =>
          import('./feed/feed.routes').then((m) => m.FEED_ROUTES),
      },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ],
  },
];
