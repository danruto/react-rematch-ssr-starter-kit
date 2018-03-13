import { DEFAULT_LOCALE } from '../../constants';

const Locale = {
    state: {
        locale: DEFAULT_LOCALE,
    },
    reducers: {
        update(state, { locale }) {
            return {
                ...state,
                locale,
            };
        },
    },
    effects: {
        async updateAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.update(payload);
        },
    },
};

export default Locale;
