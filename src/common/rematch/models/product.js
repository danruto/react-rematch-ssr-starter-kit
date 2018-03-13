const Product = {
    state: {
        id: 0,
        name: 'Kappa',
    },
    reducers: {
        update(state, { name }) {
            return {
                ...state,
                name,
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

export default Product;
