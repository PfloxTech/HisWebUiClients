import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {UserlogonModule} from './app/userlogon/userlogon.module'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UserlogonModule)
  .catch(err => console.error(err));