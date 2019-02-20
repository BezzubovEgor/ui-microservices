import {
    registerApplication,
    start
} from 'single-spa';

import { runScript, loadApp } from './utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const CONTENT_ID = 'microservice-content';

export function hashPrefix(prefix) {
    return function (location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}

registerApplication(
    'root',
    () => import('./layout/layout.app'),
    () => true // to show always
);

registerApplication(
    'home',
    () => import('./home/home.app'),
    hashPrefix('home'), {
        container: CONTENT_ID
    }
)

registerApplication(
    'todolist',
    loadApp('reactApp', [
        'http://localhost:9001/singleSpaEntry.js',
    ]),
    hashPrefix('todolist'), {
        container: CONTENT_ID
    }
);

registerApplication(
    'feedback',
    loadApp('angularApp', [
        'http://localhost:4200/runtime.js',
        'http://localhost:4200/es2015-polyfills.js',
        'http://localhost:4200/polyfills.js',
        'http://localhost:4200/styles.js',
        'http://localhost:4200/vendor.js',
        'http://localhost:4200/main.js',
    ]),
    hashPrefix('feedback'), {
        container: CONTENT_ID
    }
);

registerApplication(
    'vue',
    loadApp('vueApp', [
        'http://localhost:8080//app.js',
    ]),
    () => true // to show always
);

start();