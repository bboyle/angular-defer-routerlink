import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { ElfNgRouterStoreModule } from '@ngneat/elf-ng-router-store';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, ElfNgRouterStoreModule),
    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withViewTransitions()
    ), provideAnimationsAsync(),
  ],
};
