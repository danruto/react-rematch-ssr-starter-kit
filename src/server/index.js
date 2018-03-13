import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import App from '../common/containers/App';
import { LanguageProvider } from '../common/containers/LanguageProvider';

import configureStore from '../common/rematch';
import { translationMessages } from '../common/i18n';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST); // eslint-disable-line

const server = express();
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {
        // Compile an initial state
        const preloadedState = { };

        // Create a new Redux store instance
        const store = configureStore(preloadedState);

        // Render the component to a string
        const markup = renderToString(
            <Provider store={store}>
                <LanguageProvider locale="en" messages={translationMessages}>
                    <StaticRouter context={store} location={req.url}>
                        <App />
                    </StaticRouter>
                </LanguageProvider>
            </Provider>,
        );

        // Grab the initial state from our Redux store
        const finalState = store.getState();

        res.send(`<!doctype html>
                <html lang="">
                <head>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta charSet='utf-8' />
                    <title>Razzle Redux Example</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    ${assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''}
                      ${process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`}
                </head>
                <body>
                    <div id="root">${markup}</div>
                    <script>
                      window.__PRELOADED_STATE__ = ${serialize(finalState)}
                    </script>
                </body>
              </html>`,
        );
    },
    );

export default server;
