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

const MICROSERVICE_INIT_OPTIONS : {
  container?: any,
} = { };


export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  (props: any) => {
    Object.assign(MICROSERVICE_INIT_OPTIONS, props)
    return reactLifecycles.mount(props);
  },
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById(MICROSERVICE_INIT_OPTIONS.container);
}