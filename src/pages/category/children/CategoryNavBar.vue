<template>
  <NavBar class="category-navbar">
    <div slot="center">Categories</div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
export default {
  name: "CategoryNavBar",
  components: { NavBar }
};
</script>

<style scoped>
.category-navbar {
  background-color: var(--color-tint);
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}
</style>