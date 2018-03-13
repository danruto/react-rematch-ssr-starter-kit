import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { Provider } from 'react-redux';

import App from './index';
import LanguageProvider from '../../containers/LanguageProvider';

import configureStore from '../../rematch';
import { translationMessages } from '../../i18n';

const store = configureStore({});

describe('<App />', () => {
    test('renders without exploding', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <LanguageProvider messages={translationMessages}>
                    <MemoryRouter>
                        <App />
                    </MemoryRouter>
                </LanguageProvider>
            </Provider>,
            div,
        );
    });
});
