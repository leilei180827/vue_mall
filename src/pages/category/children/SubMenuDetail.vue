<template>
  <!-- <div class="sub-menu-detail">
    <ProductItem
      v-for="(item,index) in products"
      :key="index"
      :productItem="item"
      class="sub-menu-detail-item"
    ></ProductItem>
  </div>-->
  <GridView>
    <ProductItem v-for="(item,index) in products" :key="index" :productItem="item"></ProductItem>
  </GridView>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import ProductItem from "components/content/products/ProductItem";
export default {
  name: "SubMenuDetail",
  components: { GridView, ProductItem },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
/* .sub-menu-detail {
  display: flex;
  justify-content: center;
  row-gap: 5px;
  column-gap: 3px;
}
.sub-menu-detail-item {
  flex: 0 0 50%;
} */
</style>