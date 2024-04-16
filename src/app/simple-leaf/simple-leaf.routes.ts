import { Routes } from '@angular/router';

export const LEAF_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./simple-leaf.component').then((m) => m.SimpleLeafComponent),
  },
];
