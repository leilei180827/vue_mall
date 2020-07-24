export default {
  totalNumber: (state) => {
    return state.productsInCart.length;
  },
  productsInCart: (state) => {
    return state.productsInCart;
  },
};
