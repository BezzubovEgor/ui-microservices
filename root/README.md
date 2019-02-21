# root

## Table of contents

- [root](#root)
  - [Table of contents](#table-of-contents)
  - [App structure](#app-structure)
  - [Get started](#get-started)
  - [Single-spa root config](#single-spa-root-config)
  - [Single-spa layout config](#single-spa-layout-config)
  - [Single-spa home config](#single-spa-home-config)
  - [Lazy loaded services](#lazy-loaded-services)

## App structure

    - src/
        - home/
            - home.app.js    -> home service entry point
            - Home.jsx       -> main home service component
        - layout/
            - layout.app.js  -> layout service entry point
            - Header.js
            - Layout.js      -> main layout service component
        - utils/
            - loader-utils   -> some utils functions to dynamicly load 
                                js-modules.

        - index.js           -> entry poing of application, in
                                this file we should register our apps

    - package.json


## Get started

You need to install `single-spa` and `single-spa-react`:

``` bash
    npm install --save single-spa single-spa-react
```

## Single-spa root config

Open `index.js` file and change this content to cinfigure all fo the apps, you should use `registerApplication` of `single-spa` to do it. Example:

``` js
import { registerApplication, start } from 'single-spa';

import { loadApp } from './utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/**
 * function to render load & mount apps on specific condition, in this
 * example on specific hash prefix
 */
export function hashPrefix(prefix) {
    return function (location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}

// register local subapp to define layout
registerApplication(
    'root',
    () => import('./layout/layout.app'),
    () => true // to show always
);

// register other local subapp to show home page
registerApplication(
    'home',
    () => import('./home/home.app'),
    hashPrefix('home'),
)

// register `react-service` and dinamicly load it
registerApplication(
    'react-service',
    loadApp('reactApp', [
        'http://localhost:9001/singleSpaEntry.js',
    ]),
    hashPrefix('react-service'),
);


// register `angular-service` and dinamicly load it
registerApplication(
    'angular-service',
    loadApp('angularApp', [
        'http://localhost:4200/runtime.js',
        'http://localhost:4200/es2015-polyfills.js',
        'http://localhost:4200/polyfills.js',
        'http://localhost:4200/styles.js',
        'http://localhost:4200/vendor.js',
        'http://localhost:4200/main.js',
    ]),
    hashPrefix('angular-service'),
);

// register `vue-service` and dinamicly load it
registerApplication(
    'vue-service',
    loadApp('vueApp', [
        'http://localhost:8080//app.js',
    ]),
    () => true // to show always
);

// start root app
start();
```

## Single-spa layout config

In this example we have local service `layout` this service will provide grid and layout to display other apps. You can check `src/layout/` folder.

This app has own single-spa service module. You can check `src/layout/layout.app.js`, in this file defined some service handlers `bootstrap`, `mount`, `unmount`:

``` js

import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import App from './Layout.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
});

export const bootstrap = [ reactLifecycles.bootstrap ];

export const mount = [ reactLifecycles.mount ];

export const unmount = [ reactLifecycles.unmount ];
// Establishes where single-spa will mount our application
function domElementGetter() {
  return document.getElementById("root");
}
```

## Single-spa home config

We also can define other local services, for example we defined home service to show home page, you can find it on `src/home/` folder. You can see [previous chapter](!#single-spa-layout-config) to se how you can create local service in your project.

## Lazy loaded services

In this example we have 3 lazy loaded service: `react-service`, `angular-service` and `vue-serve`. To lazy load this services on the our root app and mout it we should define some loader function or use some third-party libs, for example [system.js](!https://github.com/systemjs/systemjs).

In this example we defined our loader function to dinamicly load our services, you can check it in the `src/utils/loader-utils.js`. It uses window modules to register app:

``` js
export const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

export const loadApp = (appName, urls) => async () => {
    for (const url of urls) {
        await runScript(url);
    }
    return window[appName];
}

```