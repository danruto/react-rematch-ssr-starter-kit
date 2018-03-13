import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../common/rematch';

import App from '../common/containers/App';
import LanguageProvider from '../common/containers/LanguageProvider';
import { translationMessages } from '../common/i18n';

const store = configureStore(window.__PRELOADED_STATE__); // eslint-disable-line

hydrate(
    <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LanguageProvider>
    </Provider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
