<template>
  <div id="app">
    <router-view></router-view>
    <TabBar :titles="titles"></TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar.vue";
export default {
  name: "App",
  components: {
    TabBar,
  },
  data() {
    return {
      titles: ["Home", "Category", "Cart", "Profile"],
    };
  },
};
</script>

<style></style>
