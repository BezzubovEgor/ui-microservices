import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import { OPTIONS } from './options.js'

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    el: OPTIONS.conteinerId,
  }
});

export const bootstrap = [ vueLifecycles.bootstrap ];

export const mount = [ vueLifecycles.mount ];

export const unmount = [ vueLifecycles.unmount ];