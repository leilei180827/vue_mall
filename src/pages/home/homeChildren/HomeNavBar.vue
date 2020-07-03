<template>
  <NavBar class="homeNavBar">
    <div slot="center">Mushroom Mall</div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
export default {
  name: "HomeNarBar",
  components: { NavBar }
};
</script>

<style scoped>
.homeNavBar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>