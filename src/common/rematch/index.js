import { init } from '@rematch/core';

import ProductModel from './models/product';
import LocaleModel from './models/locale';

const configureStore = initialState => init({
    redux: {
        initialState,
    },
    models: {
        ProductModel,
        LocaleModel,
    },
});

export default configureStore;
