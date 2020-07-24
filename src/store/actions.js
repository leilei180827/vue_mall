export default {
  add_to_cart(context, payload) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      const existed = context.state.productsInCart.find(
        (item) => item.iid === payload.iid
      );
      if (existed) {
        context.commit("add_count", payload);
        resolve("Count+1 Successfully");
      } else {
        context.commit("add_to_cart", payload);
        resolve("Added Successfully");
      }
    });
  },
};
