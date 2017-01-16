// INITIALIZATION SCRIPT FOR ANGULAR2

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// This is set when we run the biuld script from npm
if (process.env.ENV === 'production') {
  enableProdMode();
}

// Set the default module for our app
platformBrowserDynamic().bootstrapModule(AppModule);
