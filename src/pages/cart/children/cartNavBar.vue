<template>
  <NavBar class="cart-navbar">
    <div slot="center">my cart({{totalNumber}})</div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import { mapGetters } from "vuex";
export default {
  name: "CartNavbar",
  components: { NavBar },
  computed: {
    ...mapGetters(["totalNumber"])
  }
};
</script>

<style scoped>
.cart-navbar {
  background-color: var(--color-tint);
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}
</style>