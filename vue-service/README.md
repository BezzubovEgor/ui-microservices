# vue-service

## Table of content

- [vue-service](#vue-service)
  - [Table of content](#table-of-content)
  - [App structure](#app-structure)
  - [Project config](#project-config)
  - [Single-spa config](#single-spa-config)

## App structure

``` bash
- src/
  - App.vue          // Main app component
  - EventBus.js      // Module to handle custom events from `window`
  - main.js          // App entry point, here should be configure
                        single-spa service
  - options.js

- package.json
- vue.config.js      // Here are should be changed webpack config
```

## Project config

You should create `vue.config.js` file and change webpack config to devine moudle microservice, for example:

``` js
module.exports = {
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'window',
        },
    }
}
```

## Single-spa config

You should install `single-spa-vue`:

``` bash
npm i --save single-spa-vue
```

To define single-spa microfrontend service you should add `mount`, `bootstrap` and `unbount` handlers to your module. For it in the entry poin of your app you should add next:

```js
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    el: '#contenter-id-to-mount-your-service',
  }
});

export const bootstrap = [ vueLifecycles.bootstrap ];

export const mount = [ vueLifecycles.mount ];

export const unmount = [ vueLifecycles.unmount ];
```