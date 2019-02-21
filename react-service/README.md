# react-service

## Table of Contents

- [react-service](#react-service)
  - [Table of Contents](#table-of-contents)
  - [App structure](#app-structure)
  - [Project config](#project-config)
  - [Single-spa config](#single-spa-config)

## App structure

``` bash
- src/
  - components/        // Other app components
  - models/            // Models of the app
  - utils/             // Different utils of application
  - App.tsx            // Main app component
  - index.tsx          // App entry point, here should be configure
                        single-spa service

- package.json
- webpack.config.js    // custom webpack config
```

## Project config

You need to change webpack config to define service as lib, you need create `webpack.config.js` and define custom config. You also can use default react-scripts `webpack.config.js`, you can write somthing like this:

``` js
/* webpack.config.js */

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const config = require('./node_modules/react-scripts-ts/config/webpack.config.dev')

module.exports = {
    ...config,
    entry: {
        singleSpaEntry: './src/index.tsx',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),

        library: 'reactApp',
        libraryTarget: 'window',
    },

    devServer: {
        headers: {
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },

    devtool: 'eval-source-map',
};
```

Then if you start your app it should use this custom webpack config.
Also you can change port for devserver or change script in your `package.json`:

``` json
{
  ...
  "scripts": {
    "start": "react-scripts-ts start",
    "build": "react-scripts-ts build",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject",
    // change port for devserver
    "watch": "webpack-dev-server --port 9001"
  },
  ...
}
```

## Single-spa config

You should install `single-spa-react`:

``` bash
npm i --save single-spa-react
```

To define single-spa microfrontend service you should add `mount`, `bootstrap` and `unbount` handlers to your module. For it in the entry poin of your app you should add next:

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as SingleSpaReact from 'single-spa-react';

import "@babel/polyfill";

import App from './App';

const reactLifecycles = (SingleSpaReact as any).default({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: App,
});

export const bootstrap = [ reactLifecycles.bootstrap ];

export const mount = [ reactLifecycles.mount ];

export const unmount = [ reactLifecycles.unmount ];

function domElementGetter() {
  return document.getElementById('some-container-id-to-mount-service');
}
```