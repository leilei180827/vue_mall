<template>
  <div class="tab-item">
    <!-- <img :src="" alt=""> -->
    <span :class="{ active: isActive }">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped>
.tab-item {
  flex: 1;
}
.tab-item span {
  color: black;
  font-size: 16px;
}
.tab-item .active {
  /* color:var(--color-tint) */
  color: pink;
}
</style>
