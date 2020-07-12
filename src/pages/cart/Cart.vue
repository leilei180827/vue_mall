<template>
  <div id="cart">
    <CartNavBar></CartNavBar>
    <CartProducts class="cart-products"></CartProducts>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import { CartNavBar, CartProducts, CartBottomBar } from "./children";

export default {
  name: "Cart",
  components: { CartNavBar, CartProducts, CartBottomBar },
  activated() {
    console.log("cart activated");
    console.log("refresh");
  },
  methods: {}
};
</script>

<style>
#cart {
  height: 100vh;
}
.cart-products {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 89px;
}
</style>
