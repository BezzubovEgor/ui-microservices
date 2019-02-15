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


export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app1');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app1';
    document.body.appendChild(el);
  }

  return el as Element;
}