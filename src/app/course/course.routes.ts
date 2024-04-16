import { Routes } from '@angular/router';

export const COURSE_ROUTES: Routes = [
  {
    path: '',
    // canActivate: [isValidUser],
    loadComponent: () =>
      import('../simple-router-outlet/simple-router-outlet.component').then(
        (m) => m.SimpleRouterOutletComponent
      ),
    // title: CourseTitleResolverService,
    children: [
      { path: 'home', redirectTo: 'feed/all', pathMatch: 'full' },

      // feeds
      {
        path: 'feed',
        // canDeactivate: [confirmUnsavedReview],
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        loadComponent: () =>
          import('../simple-router-outlet/simple-router-outlet.component').then(
            (m) => m.SimpleRouterOutletComponent
          ),
        // data: { title: 'Feed' },
        // title: CourseTitleResolverService,
        children: [
          {
            path: 'all',
            loadComponent: () =>
              import('./course-feed/course-feed.component').then(
                (m) => m.CourseFeedComponent
              ),
          },
          { path: '', redirectTo: 'all', pathMatch: 'full' },
        ],
      },

      {
        path: '',
        loadComponent: () =>
          import('../simple-leaf/simple-leaf.component').then(
            (m) => m.SimpleLeafComponent
          ),
      },
    ],
  },
];
