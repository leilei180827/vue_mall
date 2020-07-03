<template>
  <div class="tab">
    <TabBarItem
      v-for="(title, index) in titles"
      :key="index"
      :title="title"
    ></TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: { TabBarItem },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
}
</style>
