<template>
  <Scroll class="sub-menu">
    <div>
      <SubMenuCategory :subCategories="showSubCategories"></SubMenuCategory>
      <SubMenuDetail :subCategoryDetails="subMenu.subCategoryDetails"></SubMenuDetail>
    </div>
  </Scroll>
</template>

<script>
import SubMenuCategory from "./SubMenuCategory.vue";
import SubMenuDetail from "./SubMenuDetail.vue";
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "SubMenu",
  components: {
    SubMenuCategory,
    SubMenuDetail,
    Scroll
  },
  props: {
    subMenu: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showSubCategories: function() {
      if (!this.subMenu.subCategories) {
        return [];
      }
      console.log("subMenu subCategories");
      console.log(this.subMenu.subCategories);
      return this.subMenu.subCategories;
    }
  }
};
</script>

<style scoped>
.sub-menu {
  flex: 1;
  height: 100%;
}
</style>