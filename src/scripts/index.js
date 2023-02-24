import 'regenerator-runtime';
import './views/load-css';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
    button: document.querySelector('.nav__hamburger'),
    drawer: document.querySelector('.nav__list'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
