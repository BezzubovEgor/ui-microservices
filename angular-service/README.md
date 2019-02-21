# Angular Service App (single-spa example)

This service based on angular 6+ cli

## Table of content

- [Angular Service App (single-spa example)](#angular-service-app-single-spa-example)
  - [Table of content](#table-of-content)
  - [App structure](#app-structure)
  - [Project configuration](#project-configuration)
  - [Single-spa configuration](#single-spa-configuration)

## App structure

``` bash
- src/
  - app/
    - app.component.css
    - app.component.html
    - app.component.ts
    - app.module.ts
  - main.ts             // entry point of service, you should config 
                           single-spa-app here
  - index.html
  - styles.css

- angular.json          // angular config, yoy should change builders 
                           for it to use custom webpack.config.js
- package.json
- webpack.config.js
```

## Project configuration

From the begining you should install next dependencies:

  ``` bash
  npm i -D @angular-builders/custom-webpack
  npm i -D @angular-builders/dev-server
  ```

Then you should add your own webpack config and change next section to your own, for example:

``` js
/* webpack.config.js */

module.exports = {
  output: {
      library: 'angularApp',
      libraryTarget: 'window', // will enabled as `window.angularApp` variable
  },
};

```

Then change angular.json, you should define your webpack.config.js in it:

``` json
{
  ...
  "projects": {
    "[your-project]": {
      ...
      "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "customWebpackConfig": {
                "path": "./webpack.config.js",
                "replaceDuplicatePlugins": true
            },
            ...
          },
          ...
        },
        "serve": {
          "builder": "@angular-builders/dev-server:generic",
          "options": {
            "browserTarget": "ngpage:build"
          },
          ...
        },
  ...
}
```

## Single-spa configuration

You should install `single-spa-angular`:

``` bash
npm i --save single-spa-angular
```

Then you can import `single-spa-angular` and configure your service:

``` ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(console.error);

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
  ngLifecycles.mount,
];

export const unmount = [
  ngLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById('some element id to render service');
}
```

Thats all. This app should work as microfrontent now. You can include all js-files that was builded by building process into your root **single-spa** app.

