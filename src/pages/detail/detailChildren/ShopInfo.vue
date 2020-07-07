<template>
  <div class="shop-info">this is shop info</div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
</style>