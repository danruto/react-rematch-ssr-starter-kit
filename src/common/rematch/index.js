import { init } from '@rematch/core';

import ProductModel from './models/product';

const configureStore = (initialState) => init({
    redux: {
        initialState,
    },
    models: {
        ProductModel,
    },
});

export default configureStore;
