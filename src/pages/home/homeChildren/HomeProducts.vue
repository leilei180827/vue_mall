<template>
  <GridView>
    <HomeProductItem v-for="(item,index) in products" :key="index" :productItem="item"></HomeProductItem>
  </GridView>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import HomeProductItem from "./HomeProductItem";
export default {
  name: "HomeProducts",
  components: { HomeProductItem, GridView },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    console.log(this.products);
  }
};
</script>

<style scoped>
.products {
  display: flex;
  padding: 0 2px;
}
</style>