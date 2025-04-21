import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr, ToastrConfig } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


const toastrConfig: Partial<ToastrConfig> = {
  positionClass: 'toast-bottom-center',
  timeOut: 7000,
  closeButton: true,
  progressBar: true
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(toastrConfig)
  ]
};
