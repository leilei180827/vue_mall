<template>
    <GridView v-if="subCategories" :cols="3">
      <div class="sub-category" v-for="(item,index) in subCategories" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </div>
    </GridView>
</template>

<script>
import GridView from "components/common/gridView/GridView";
export default {
  name: "SubMenuCategory",
  components: { GridView },
  props: {
    subCategories: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.sub-category {
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
img {
  width: 80%;
  vertical-align: middle;
  padding-bottom: 10px;
}
</style>