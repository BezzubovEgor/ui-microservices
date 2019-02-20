import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';
import {Router} from '@angular/router';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(console.error);

const MICROSERVICE_INIT_OPTIONS : {
  container?: any,
} = { };

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<app-root />`,
})

export const bootstrap = [
  ngLifecycles.bootstrap,
];

export const mount = [
  (props) => {
    Object.assign(MICROSERVICE_INIT_OPTIONS, props)
    return ngLifecycles.mount(props);
  },
];

export const unmount = [
  ngLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById(MICROSERVICE_INIT_OPTIONS.container);
}
