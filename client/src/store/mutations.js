export default {
  add_to_cart(state, payload) {
    state.productsInCart.push(payload);
    return;
  },
  add_count(state, payload) {
    state.productsInCart.find((item) => item.iid === payload.iid).count += 1;
    return;
  },
};
