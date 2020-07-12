<template>
  <div class="recommend-info">
    <Products :products="info" :hMargin="0" :wMargin="0"></Products>
  </div>
</template>

<script>
import Products from "components/content/products/Products";
export default {
  name: "RecommendInfo",
  components: { Products },
  props: {
    info: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend-info {
  margin-bottom: 15px;
  padding: 0 8px 5px;
  border-bottom: 3px solid var(--color-border-bottom);
}
</style>