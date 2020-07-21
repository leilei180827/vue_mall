<template>
  <GridView :hMargin="hMargin" :wMargin="wMargin">
    <ProductItem v-for="(item,index) in products" :key="index" :productItem="item"></ProductItem>
  </GridView>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import ProductItem from "./ProductItem";
export default {
  name: "Products",
  components: { ProductItem, GridView },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      }
    },
    hMargin: {
      type: Number,
      default: 8
    },
    wMargin: {
      type: Number,
      default: 8
    }
  },
  mounted() {
    console.log(this.products);
  }
};
</script>

<style scoped>
</style>