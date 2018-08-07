import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';

import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import App from './router';
// import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <LocaleProvider locale={zh_CN}><Component /></LocaleProvider>
        </Provider>
        , document.getElementById('root')
    )
};

render(App);
// registerServiceWorker();
