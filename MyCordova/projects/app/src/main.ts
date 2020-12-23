import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));

/////////////////////
const onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  var deviceready = document.getElementById('deviceready');
  if (deviceready) deviceready.classList.add('ready');
};

document.addEventListener('deviceready', onDeviceReady, false);