import { registerApplication, start } from 'single-spa';

import { loadApp } from './utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CONTENT_ID } from './config';

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
    'react-service',
    loadApp('reactApp', [
        'http://localhost:9001/singleSpaEntry.js',
    ]),
    hashPrefix('react-service'), {
        container: CONTENT_ID
    }
);

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
    hashPrefix('angular-service'), {
        container: CONTENT_ID
    }
);

registerApplication(
    'vue-service',
    loadApp('vueApp', [
        'http://localhost:8080//app.js',
    ]),
    () => true // to show always
);

start();