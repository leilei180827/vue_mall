<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  padding: 0 0 3px;
  display: flex;
  position: relative;
  height: 44px;
  text-align: center;
  align-items: center;
  z-index: 10;
}
.left,
.right {
  flex: 1;
}
.center {
  flex: 2;
}
</style>
