import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { appRoutes } from './app.routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),       // ✅ This provides HttpClient
    provideRouter(appRoutes)   // ✅ This provides routing
  ]
});
