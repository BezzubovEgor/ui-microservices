import {
    registerApplication,
    start
} from 'single-spa';

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
    () => window.System.import('http://localhost:9001/singleSpaEntry.js'),
    hashPrefix('todolist'), {
        container: CONTENT_ID
    }
);

start();