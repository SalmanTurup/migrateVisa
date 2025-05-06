import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr, ToastrConfig } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';


const toastrConfig: Partial<ToastrConfig> = {
  positionClass: 'toast-bottom-center',
  timeOut: 3000,
  closeButton: true,
  progressBar: true
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(toastrConfig),
    provideHttpClient(withFetch())
  ]
};
